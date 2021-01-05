const api_manager = require("./api_manager");
module.exports = class DBManager {
    constructor() {
        this.APIManager = new api_manager();
    }

    // Populates the cloud DB with all stocks from the dow jones index
    populateWithDowStocks() {
        let DJIIndexStocksJSON = this.APIManager.getIndex('^DJI');
    }

};