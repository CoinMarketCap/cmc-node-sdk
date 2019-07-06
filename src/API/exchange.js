const Base = require('./base.js');

module.exports = class Exchange extends Base{
    
    constructor(client) {
        super(client, 'exchange');
    }
    
}


