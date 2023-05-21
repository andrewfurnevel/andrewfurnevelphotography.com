'use strict';

const config = require(`${process.env.APP_ROOT}/_config.js`);

// Needed to be efined outside of the class
const dbCredentials = {
    host: config.dbCredentials.host,
    port: config.dbCredentials.port,
    user: config.dbCredentials.username,
    password: config.dbCredentials.password,
    database: config.dbCredentials.database
}
class DB {
    
    constructor() {

        // Postgres Connection
        this.Pool = require('pg').Pool;
        this.Client = require('pg').Client;



    }

    pool() {
        const pool = new this.Pool({ dbCredentials });     
        return pool;
    }

    client() {
        const client = new this.Client({ dbCredentials });       
        return client; 
    }

} // End Class

module.exports = { DB }