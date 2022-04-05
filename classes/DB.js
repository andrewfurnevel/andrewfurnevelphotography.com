'use strict';

const config = require(`${process.env.PWD}/_config.js`);

class DB {
    constructor() {
        
        const {Pool, Client} = require('pg')

        // Assign Environment Variables
        const pool = new Pool({
            host: config.db.host,
            port: config.db.port,
            user: config.db.username,
            password: config.db.password,
            database: config.db.database
        });

        return pool;
    }
}

const db = new DB();

module.exports = { 
    pool,
    client
}