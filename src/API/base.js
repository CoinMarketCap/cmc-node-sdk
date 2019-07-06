
module.exports = class Base{
    
    constructor(client, endpointBase) {
        this.client = client
        this.endpointBase = endpointBase
    }
    
    async getMap(parameters){
    	let endpointURL = this.endpointBase + '/map'
        return await this.client.callAPI(endpointURL, parameters)
    }
    
    async getInfo(parameters){
    	let endpointURL = this.endpointBase + '/info'
        return await this.client.callAPI(endpointURL, parameters)
    }

    async getListingsLatest(parameters) {
       	let endpointURL = this.endpointBase + '/listings/latest'
        return await this.client.callAPI(endpointURL, parameters)
    }
    
    async getQuotes(parameters) { 
       	let endpointURL = this.endpointBase + '/quotes/latest'
        return await this.client.callAPI(endpointURL, parameters)
    }
    
    async getQuotesHistorical(parameters) { 
       	let endpointURL = this.endpointBase + '/quotes/historical'
        return await this.client.callAPI(endpointURL, parameters)
    }

    async getMarketPairs(parameters) { 
       	let endpointURL = this.endpointBase + '/market-pairs/latest'
        return await this.client.callAPI(endpointURL, parameters)
    }
    
    async getOHLCV(){
       	let endpointURL = this.endpointBase + '/ohlcv/latest'
        return await this.client.callAPI(endpointURL, parameters)
    }    
    
    async getOHLCVHistorical(){
       	let endpointURL = this.endpointBase + '/ohlcv/historical'
        return await this.client.callAPI(endpointURL, parameters)
    }

    validateParameters(){
        return true
    }
    

}


