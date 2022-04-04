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

