'use strict';

const config = require(`${process.env.APP_ROOT}/_config.js`);

// Needed to be efined outside of the class
const dbCredentials = {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE
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