var realityModel = require('../model/realityModel');

function cadastrar(req, res){
    var stories = req.body["storiesServer"];

    if(stories == undefined){
        res.status(400).send('Stories is Undefined');
    }else{
        realityModel.cadastrar(stories).then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function listar(req, res){
    realityModel.listar().then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    cadastrar,
    listar
}