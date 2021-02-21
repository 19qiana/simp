var express = require('express')
var app = express();

exports.listStocks = (req, res) => {
    // let apiManager = new Api_Manager(process);
    console.log("Testing listStocks HTTP GET endpoint.");
    var data = {
        "Testing":"HEllO"
    }
    res.status(200).send(data);
};