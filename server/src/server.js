"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
app.get("/", function (req, res) {
    return res.json("Acessou!");
});
app.listen(3001);
