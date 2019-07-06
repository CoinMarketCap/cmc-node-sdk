
module.exports = class GlobalMetrics{
    
    constructor(client) {
        this.client = client
    }
    
    getGlobalMetricsLatest(parameters) {
        const endpointURL = 'global-metrics/quotes/latest';
        this.client.callAPI(endpointURL, parameters)

    }
    
    getGlobalMetricsHistorical(parameters) { 
        const endpointURL = 'global-metrics/quotes/historical'
        this.client.callAPI(endpointURL, parameters)

    }    

}


