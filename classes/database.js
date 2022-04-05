'use strict';

const config = require(`${process.env.PWD}/_config.js`);

const { Pool, Client } = require("pg");

const dbCredentials = {
    host: config.dbCredentials.host,
    port: config.dbCredentials.port,
    user: config.dbCredentials.username,
    password: config.dbCredentials.password,
    database: config.dbCredentials.database
}
const pool = new Pool({ dbCredentials });

const client = new Client ({ dbCredentials });

module.exports = { pool, client };


// Below is code from the DB Class

// const config = require(`${process.env.PWD}/_config.js`);

// class DB {
//     constructor() {
        
//         const {Pool, Client} = require('pg')

//         // Assign Environment Variables
//         const pool = new Pool({
//             host: config.db.host,
//             port: config.db.port,
//             user: config.db.username,
//             password: config.db.password,
//             database: config.db.database
//         });

//         return pool;
//     }
// }

// const db = new DB();

// module.exports = { 
//     pool,
//     client
// }