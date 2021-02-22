const request = require('request');
const fetch = require('node-fetch');
const URIGenerator = require('./URIGenerator');
module.exports = class FinnHubAPI {
    constructor() {
        this.URIGenerator = new URIGenerator();
    }
    async getCompanyQuote(tickerSymbol) {
        console.log("Getting quote for ticker", tickerSymbol);
        const url = this.URIGenerator.getCompanyQuote(tickerSymbol);
        const req = await request(url, {json:true});
        fetch(req).then(response => {
            return response.json();
        }).catch(err => {
            console.log(err);
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
            console.log(body);
            return body;
        });
    }
};