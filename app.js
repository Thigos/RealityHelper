const express = require("express");
const cors = require("cors");
const path = require("path");

var app = express();

var indexRouter = require("./src/routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);

app.listen(8080, function () {
    console.log('Servidor Iniciado: http://localhost:8080');
});
