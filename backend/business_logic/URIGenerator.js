require('dotenv').config({path: '../.env'});
const api_token = process.env.API_Key;
module.exports = class URIGenerator {
    getIndicesURI(index) {
        return `https://finnhub.io/api/v1/index/constituents?symbol=${index}&token=${api_token}`;
    }

    getBasicFinancialsURI(stockTicker) {
        return `https://finnhub.io/api/v1/stock/metric?symbol=${stockTicker}&metric=all&token=${api_token}`;
    }

    getCompanyQuote(stockTicker) {
        return `https://finnhub.io/api/v1/quote?symbol=${stockTicker}&token=${api_token}`
    }
};