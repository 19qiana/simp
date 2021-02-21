const Api_Manager = require('./business_logic/api_manager.js');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config({path: '../.env'});
const app = express();
const adminRoute = require('./routes/admin');
var api_manager = require('./business_logic/api_manager');
var api_manager = new api_manager();
const dataRoute = require('./routes/data');

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', './src/pages');

app.use(express.urlencoded({ extended: false}));

app.use('/static', express.static(path.join(`${__dirname}/public`)));

app.use('/', dataRoute);
const port = process.env.PORT || 8080;
let apiManager = new Api_Manager(process);
console.log("Port=:" + port);
mongoose
    .connect(process.env.Connection_String, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log("Successfully connected to mongo Cloud DB");
        app.listen(port, ()=>console.log(`Server and Database running on ${port}, http://localhost:${port}`))
    })
    .catch((err) => {
        console.log(err);
    });

api_manager.getCompanyQuote('AAPL');
api_manager.getBasicFinancials('AAPL');
api_manager.getIndex('^DJI');
