'use strict';

const config = require(`${process.env.PWD}/_config.js`);

const { Pool } = require("pg");

const pool = new Pool({
    host: config.db.host,
    port: config.db.port,
    user: config.db.username,
    password: config.db.password,
    database: config.db.database
});

module.exports = { pool };
