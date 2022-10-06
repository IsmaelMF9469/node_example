"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 4000;
var port2 = 5000;
app.get('/', function (request, response) {
    response.send(' Hello world ');
});
app.get('/participante', function (request, response) {
    response.send('Hello participante ');
});
app.listen(port, function () {
    console.log(" server is running at port 4000 ");
});
