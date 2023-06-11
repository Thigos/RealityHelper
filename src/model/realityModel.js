var database = require('../database/connection');

function cadastrar(stories){
    var query = `
        INSERT INTO tbStories(textStories) VALUES('${stories}');
    `;
    console.log('Executando Em:', __filename);
    return database.executar(query);
}

function listar(){
    var query = `
    SELECT tbStories.*, pos, neu, neg FROM tbStories
    INNER JOIN (
        SELECT AVG(pos) AS pos, AVG(neu) AS neu, AVG(neg) AS neg, fk_tokenizeStories FROM tbsentiment GROUP BY fk_tokenizeStories
        ) AS sentiment ON idStories = sentiment.fk_tokenizeStories
    ORDER BY RAND();
    `;
    console.log('Executando Em:', __filename);
    return database.executar(query);
}

function analyticsToken(limited){
    var query = `
        SELECT COUNT(*) AS quant, word FROM tbSpeechTagger ${limited ? 'WHERE isChartable GROUP BY word ORDER BY quant limit 5;': 'GROUP BY tag;'};
    `;
    console.log('Executando Em:', __filename);
    return database.executar(query);
}

function analyticsSentiment(){
    var query = `
        SELECT
            COUNT(CASE WHEN Averages.compound >= 0.05 THEN 1 END) AS 'Positivo',
            COUNT(CASE WHEN Averages.compound > -0.05 AND compound < 0.05 THEN 1 END) AS 'Neutro',
            COUNT(CASE WHEN Averages.compound <= -0.05 THEN 1 END) AS 'Negativo'
        FROM (
            SELECT AVG(compound) AS compound FROM tbsentiment GROUP BY fk_tokenizeStories
        ) AS Averages;
    `;
    console.log('Executando Em:', __filename);
    return database.executar(query);
}

module.exports = {
    cadastrar,
    listar,
    analyticsToken,
    analyticsSentiment
}