const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config({path: '../.env'});
const app = express();
const adminRoute = require('./routes/admin');

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', './src/pages');

app.use(express.urlencoded({ extended: false}));

app.use('/static', express.static(path.join(`${__dirname}/public`)));

app.use('/', adminRoute);
mongoose
    .connect(process.env.Connection_String, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log("Successfully connected to mongo Cloud DB");
    })
    .catch((err) => {
        console.log(err);
    });
