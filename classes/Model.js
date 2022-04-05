'use strict';


// Imports

const config = require(`${process.env.PWD}/_config.js`);
const DB = require(`${process.env.PWD}/classes/DB.js`);

class Model {
    
    constructor() {
        this.db = new DB.DB();

        this.pool = this.db.pool();
        // Client does not work in the model
        this.client = this.db.client();
    }

} // End Class

module.exports = Model;
