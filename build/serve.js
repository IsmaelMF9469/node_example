"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
app.get('/participante', function (request, response) {
    response.send(" Hello participante ");
});
app.listen(port, function () {
    console.log(" server is running at port ".concat(port, " "));
});
