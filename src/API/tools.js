
module.exports = class Tools{
    
    constructor(client) {
        this.client = client
    }
    
    getPriceConversions(parameters) {
        const endpointURL = 'tools/price-conversion';
        this.client.callAPI(endpointURL, parameters)
    }

}


