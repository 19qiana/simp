const request = require('request');
const URIGenerator = require('./URIGenerator');
module.exports = class FinnHubAPI {
    constructor() {
        this.URIGenerator = new URIGenerator();
    }
    getCompanyQuote(tickerSymbol) {
        console.log("Getting quote for ticker", tickerSymbol);
        request(this.URIGenerator.getCompanyQuote(tickerSymbol), {json: true}, (err, res, body) => {
            if (err) {return console.log(err);}
            console.log(body);
            return body;
        });
    }

    getBasicFinancials(tickerSymbol) {
        console.log("Getting basic financial data for ticker", tickerSymbol);
        request(this.URIGenerator.getBasicFinancialsURI(tickerSymbol), {json: true}, (err, res, body) => {
            if (err) {return console.log(err);}
            console.log(body);
            return body;
        });
    }

    getIndex(IndexTicker) {
        console.log("Getting data for index", IndexTicker);
        request(this.URIGenerator.getIndicesURI(IndexTicker), { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }
            return body;
        });
    }
};