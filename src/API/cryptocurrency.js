const Base = require('./base.js');

module.exports = class Cryptocurrency extends Base{
    
    constructor(client) {
        super(client, 'cryptocurrency');
    }
    
    async getListingsHistorical(parameters) {
        return await this.client.callAPI('cryptocurrency/listings/historical', parameters)
    }
    

}


