var database = require('../database/connection');

function cadastrar(stories){
    var query = `
        INSERT INTO tbStories(textStories) VALUES('${stories}');
    `;

    return database.executar(query);
}

module.exports = {
    cadastrar
}