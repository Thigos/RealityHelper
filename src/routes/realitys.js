var express = require("express");
var router = express.Router();
var realityController = require('../controller/realityController');

router.post("/cadastrar", function (req, res) {
    realityController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    realityController.listar(req, res);
});

module.exports = router;