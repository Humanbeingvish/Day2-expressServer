"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
app.get('/get', function (req, res) {
    res.send("Hello from express Server ");
});
app.listen(port, function () {
    console.log('Server listing on port 3000');
});
