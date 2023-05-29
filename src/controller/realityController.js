var realityModel = require('../models/realityModel');

function cadastrar(req, res){
    var stories = req.body["storiesServer"];

    if(stories == undefined){
        res.status(400).send('Stories is Undefined');
    }else{
        realityModel.cadastrar(stories);
    }

}

module.exports = {
    cadastrar
}