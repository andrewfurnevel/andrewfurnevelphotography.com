'use strict';
const config = require(`${process.env.PWD}/_config.js`);

// console.log(process.env.PWD)

const { pool } = require(`${process.env.PWD}/classes/database.js`);

class Model {

    constructor() {

    }

    async getUserById(userId) {

        try {
            let result = await pool.query(`SELECT * FROM users WHERE user_id = ${userId}`);
            // let result = await pool.query(`SELECT * FROM users WHERE user_id = 2`);
            return result;

        } catch (error) {
            console.error(error);
        }
    }


//     async getAllUsers() {
    
//         try {
//             let result = await pool.query(`SELECT * FROM users`);

//             // console.log(
//             //     result.rows[0].user_id,
//             //     result.rows[0].user_name                 
//             // );

//             // console.log(result.rows);

//             return result;
            
            
//         } catch (error) {
//             console.error(error);
//         }
//     } 

}


// module.exports = retrieveData;

exports.Model = Model;
