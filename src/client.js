const axios = require('axios')

class Client{
    
    constructor(apiKey, baseURL, validator) {
        this.apiKey = apiKey;
        this.instance = axios.create({
            baseURL: baseURL,
            headers: {
                'X-CMC_PRO_API_KEY':this.apiKey,
                'Accepts': 'application/json',
            },
        });
        this.validator = validator;
    }
    
    async callAPI(endpoint, parameters){
    	try {
    		this.validator.validate(endpoint, parameters);
			const result = await this.instance.get(endpoint, {
				params: parameters,
			});
			result.data.status.https_status = result.status; 
			return result.data;
    	}catch(error){
    		if (error.response !== undefined){
    		    console.log(error.response.data.status);
    		}else{
    			console.log(error)
    		}
    	}
        
    }
}

module.exports = Client;