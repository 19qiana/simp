class stock {
    name;
    ticker;
    fiftyTwoWeekHigh = 9999;
    fiftyWeekLow = 0;
    currentAskPrice = 0;
    currentBidPrice = 0;
    
    constructor(name, ticker, fiftyTwoWeekHigh, fiftyWeekLow, currentAskPrice, currentBidPrice) {
        this.name = name;
        this.ticker = ticker;
        this.fiftyTwoWeekHigh = fiftyTwoWeekHigh;
        this.fiftyWeekLow = fiftyWeekLow;
        this.currentAskPrice = currentAskPrice;
        this.currentBidPrice = currentBidPrice;
    }
    get name() {
        return this.name;
    }

    set name(newName) {
        this.name = newName;
    }

    get ticker() {
        return this.ticker;
    }
    
    set ticker(newTicker) {
        this.ticker = newTicker;
    }

    get fiftyTwoWeekHigh() {
        return this.fiftyTwoWeekHigh;
    }

    set fiftyTwoWeekHigh(newFiftyTwoWeekHigh) {
        this.fiftyTwoWeekHigh = newFiftyTwoWeekHigh;
    }

    get fiftyWeekLow() {
        return this.fiftyWeekLow;
    }

    set fiftyWeekLow(newFiftyTwoWeekLow) {
        this.newFiftyTwoWeekLow = newFiftyTwoWeekLow;
    }

    get currentAskPrice() {
        return this.currentAskPrice;
    }

    set currentAskPrice(newCurrentAskPrice) {
        this.currentAskPrice = newCurrentAskPrice;
    }

    get currentBidPrice() {
        return this.currentBidPrice;
    }

    set currentBidPrice(newCurrentBidPrice) {
        this.currentBidPrice = newCurrentBidPrice;
    }
}