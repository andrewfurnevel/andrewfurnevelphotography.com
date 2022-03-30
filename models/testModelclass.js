'use strict';
const config = require(`${process.env.PWD}/_config.js`);

// console.log(process.env.PWD)

const { pool } = require(`${process.env.PWD}/classes/database.js`);

class Model {

    constructor() {

    }

    async retrieveData() {
    
        // try {
            let queryRes = await pool.query(`SELECT * FROM users WHERE user_id = 2`);

            // console.log(
            //     queryRes.rows[0].user_id,
            //     queryRes.rows[0].user_name                 
            // );

            let result = queryRes.rows;
            // console.log(result);
            return queryRes;
            
            
        // } catch (error) {
        //     console.error(error);
        // }
    } 

}


// module.exports = retrieveData;

exports.Model = Model;
