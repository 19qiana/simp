const express = require('express');
const dataController = require('../controllers/data');
const router = express.Router();

router.get('/listStocks', dataController.listStocks);

module.exports = router;