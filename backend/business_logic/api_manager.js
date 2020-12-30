const request = require('request');
const URIGenerator = require('./URIGenerator');
module.exports = class FinnHubAPI {
    constructor() {
        this.URIGenerator = new URIGenerator();
    }
    getCompanyQuote(tickerSymbol) {
        request(this.URIGenerator.getCompanyQuote(tickerSymbol), {json: true}, (err, res, body) => {
            if (err) {return console.log(err);}
            console.log(body);
        });
    }

    getBasicFinancials(tickerSymbol) {
        request(this.URIGenerator.getBasicFinancialsURI(tickerSymbol), {json: true}, (err, res, body) => {
            if (err) {return console.log(err);}
            console.log(body);
        });
    }

    getIndex(IndexTicker) {
        request(this.URIGenerator.getIndicesURI(IndexTicker), { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(body);
        });
    }
};