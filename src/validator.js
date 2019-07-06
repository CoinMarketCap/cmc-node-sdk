const validators = {
	requireOne: function(req, parameters){
		let count = 0;
		const paramKeys = Object.keys(parameters);
		req.forEach(el =>{
			if (paramKeys.includes(el)){
				count += 1;
			}
		})
		if (count !== 1){
			throw 'Request is missing required parameter, must include one of the following: ' + req.toString();
		}
	},
	requireAll: function(req, parameters){
		const paramKeys = Object.keys(parameters);
		req.forEach(el =>{
			if (!paramKeys.includes(el)){
				throw 'Request is missing required parameter, must include all of the following parameters: ' + req.toString();
			}
		})
	},
}

class Validate {
	constructor(config, validate = true){
		this.config = config
		this.shouldValidate = validate;
		this.validators = {}
	}

	validate(endpoint, parameters){
		if(!this.shouldValidate){
			return true;
		}
		const reqParams = this.config.REQUIRED_PARAMETERS[endpoint];
		if (reqParams){
			this.validateReqs(reqParams, parameters);
		}
		const validParams = this.config.ENDPOINT_PARAMETERS[endpoint];
		// this.validateParams(validParams, parameters);
	}

	validateReqs(reqParams, parameters){
		Object.keys(reqParams).forEach(req =>{
			validators[req](reqParams[req], parameters);
		})
	}

	validateParams(validParams, parameters){
		Object.keys(parameters).forEach(param =>{
			if(validParams.hasOwnProperty(param)){
				validators[validParams[param]](parameters[param])
			}else{
				throw "Invalid Parameter: " + param;
			}
		})
	}

	toggle(){
		this.shouldValidate = !this.shouldValidate;
	}
}

module.exports = Validate;