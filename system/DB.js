'use strict';

// import config from '/_config.js';
import pg from 'pg';

const pool = new pg.Pool(); 

// Needed to be efined outside of the class
const dbCredentials = {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE
}

console.log(dbCredentials);
class DB {
    
    constructor() {

        // Postgres Connection
        this.pool = new pg.Pool();
        // this.Client = Client;

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

export default DB;