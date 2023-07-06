'use strict';

import Model from '../../system/Model.js';
import Message from '../../system/Message.js';
// import bcrypt from 'bcrypt';
import BcryptHelper from '../../system_helpers/BcryptHelper.js';

class AuthenticationModel extends Model {

    constructor() {
        super()
    }

    
    login = async (username, password) => {
        
        let authPassword = false;

        // console.log(username);
        // console.log(password);

        const hashedPassword = BcryptHelper.hashPassword(password);
        console.log(hashedPassword);

        try {   

            // console.log(BcryptHelper.hashPassword(password));
            // const hashedPassword = this.hashPassword(password);
            // console.log(hashedPassword);
            
            // const sql = `SELECT user_name, user_password FROM users WHERE user_name = $1 AND user_password = $2`;
            
            // console.log(username, password);
            
            const sql = `SELECT * FROM users WHERE user_name = $1`;
            
            let result = await this.pool.query (sql, [ username ]);
            
            // Get stored hashed password
            let hashedPass = result.rows[0].user_password;

            // console.log(hashedPass); // Works!!! 
            
            // console.log(hashedPass); // Works
            
            // Compare submitted and stored passwords
            // Temp Values
            // hashedPass = '$2b$10$W0qLTVx8HbeY9qxhojm/3.wx9GNwUFye.Rmw630ae5esyJaDPLr5i';

            // console.log(password); // Works!!! Prints password from login form.
            // console.log(hashedPass); // Works!!! Prints temp hashedPass, not retrieved from database.

            const authPassword = BcryptHelper.comparePassword(password, hashedPass);
            
            console.log(authPassword);
            return authPassword;
            
        } catch (error) {
            console.log(error(error));
            res.status(500).send('An error occured');
        }
        // console.log(authPassword);
        // return true; 
    }

    isRegistered = async (username) => {

        try {
            const sql = `SELECT * FROM users WHERE user_name = $1`;
            let result = await this.pool.query(sql, [username]);

            if (result.rows[0].username == username) { 
                console.log("This user already exist");
            }

            Message.error = 'This Username is Already Registered';
            return result = { username };

        } catch (error) {
            console.log(error);
        }
    }

    registerUser = (username, password) => {

        try {
            const sql = "INSERT INTO users (user_id, user_name, user_password, user_created, user_last_active, user_verified) VALUES ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 0";
        } catch {
            console.log(error);
        }

    }

    updatePassword() { 
        try {
            const sql = "UPDATE users"
        } catch (error){
            // res.status(500);
            console.log(error);
        }

    }

    verifyUser() {
        try {

        } catch (error){
            console.log(error);
        }

    }

}

export default AuthenticationModel;