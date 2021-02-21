
export default class api_manager {
    
    constructor(process) {
        this.currentProcess = process;
        this.finnhub = require('finnhub');
        this.api_key = finnhub.ApiClient.instance.authentications['api_key'];
        api_key.apiKey = process.FINNHUB_API_KEY;
    }

    // test method to print out api key
    printKey() {
        console.log(api_key.apiKey);
    }

}