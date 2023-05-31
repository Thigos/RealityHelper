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
        SELECT * FROM tbStories ORDER BY RAND();
    `;
    console.log('Executando Em:', __filename);
    return database.executar(query);
}

module.exports = {
    cadastrar,
    listar
}