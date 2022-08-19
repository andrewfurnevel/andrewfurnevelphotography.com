'use strict';

// Imports
const config = require(`${process.env.APP_ROOT}/_config.js`);

const DB = require(`${process.env.APP_ROOT}/system/DB.js`);

class Model {
    
    constructor() {
        this.db = new DB.DB();

        this.pool = this.db.pool();
        // Client does not work in the model
        this.client = this.db.client();
    }

} // End Class

module.exports = Model;
