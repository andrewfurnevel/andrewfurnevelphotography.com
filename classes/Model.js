'use strict';

const config = require(`${process.env.PWD}/_config.js`);
const { pool, client }  = require(`${process.env.PWD}/classes/database.js`);

class Model {
    
    constructor() {

        this.pool = pool;
        this.client = client;

    }

} // End Class

module.exports = Model;
