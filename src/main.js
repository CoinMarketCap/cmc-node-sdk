const Cryptocurrency = require('./API/cryptocurrency.js');
const Exchange = require('./API/exchange.js');
const GlobalMetrics = require('./API/globalmetrics.js');
const Tools = require('./API/tools.js');
const Client = require('./client.js');
const Config = require('./config.js');
const Validator = require('./validator.js');

module.exports = class api {
    constructor(apiKey, env='PROD', validate=true) {
        this.validator = new Validator(Config, validate);
        const client = new Client(
            apiKey,
            Config.BASE_URL[env],
        	this.validator
        );
        this.cryptocurrency = new Cryptocurrency(client);
        this.exchange = new Exchange(client);
        this.globalMetrics = new GlobalMetrics(client);
        this.tools = new Tools(client);
    }
    
    toggleValidator(){
		this.validator.toggle();
	}
}
