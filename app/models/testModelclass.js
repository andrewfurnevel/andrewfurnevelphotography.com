'use strict';

let cl = (arg) =>  {console.log(arg)};


const config = require(`${process.env.PWD}/_config.js`);

// console.log(process.env.PWD)

const { pool } = require(`${process.env.PWD}/classes/database.js`);
// cl(pool)
class Model {

    constructor() {

    }
    // NOTE This converts the object to a json object but doesn't seem to fix the alleviate the need fot the .then in the controller. Not sure if the json object would be passable to the view. Further tests needed!
    
    // async getUserById(userId) {
    //     try {
    //         let result = await pool.query(`SELECT * FROM users WHERE user_id = ${userId}`)
    //         .then(result => console.log(JSON.stringify(result.rows)));
    //         return result;

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // This works!
    async getUserById(userId) {

        try {
            let result = await pool.query(`SELECT * FROM users WHERE user_id = $1`, [userId])
             return result;

        } catch (error) {
            console.error(error);
        }

        finally {
            // Close connection
            // await pool.end()
            // console.log('DB Disconnected');
        }
    }

// This Works - Just Uncomment
    async getAllUsers() {
    
        try {
            let result = await pool.query(`SELECT * FROM users`);

            // console.log(
            //     result.rows[0].user_id,
            //     result.rows[0].user_name                 
            // );

            // console.log(result.rows);

            return result;
                       
        } catch (error) {
            console.error(error);
        }
    } 

}

exports.Model = Model;
