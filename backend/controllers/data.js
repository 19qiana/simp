var express = require('express')
var app = express();
const Api_Manager = require('../business_logic/api_manager.js');
exports.listStocks = async (req, res) => {
    let apiManager = new Api_Manager(process);
    // let apiManager = new Api_Manager(process);
    console.log("Testing listStocks HTTP GET endpoint.");
    var data = await apiManager.getCompanyQuote('AAPL');
    console.log(data.json());
    res.status(200).send(data.json());
};