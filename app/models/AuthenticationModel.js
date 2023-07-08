'use strict';

import Model from '../../system/Model.js';
import Message from '../../system/Message.js';
// import bcrypt from 'bcrypt';
import BcryptHelper from '../../system_helpers/BcryptHelper.js';

class AuthenticationModel extends Model {

    constructor() {
        super()
    }

    // Login  --------------------------------------------------------------------------

    login = async (username, password) => {
        
        let authPassword = false;

        const hashedPassword = BcryptHelper.hashPassword(password);

        try {   
            
            const sql = `SELECT * FROM users WHERE user_name = $1`;
            
            let result = await this.pool.query (sql, [ username ]);
            
            // Retrieve User & stored hashed password. Return false if no user found.
            if (!result.rows[0]) {
                return false; // No user with that name was found.
            }

            let hashedPass = result.rows[0].user_password;

            const authenticatePassword = await BcryptHelper.comparePasswords(password, hashedPass);
            return authenticatePassword;
            
        } catch (error) {

            console.log(error(error));
            res.status(500).send('An error occured');
            return false;
        }
    }

    // Check if User is Registered ------------------------------------------------------

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

    // Register New User ----------------------------------------------------------------

    registerUser = (username, password) => {

        try {
            const sql = "INSERT INTO users (user_id, user_name, user_password, user_created, user_last_active, user_verified) VALUES ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 0";
        } catch {
            console.log(error);
        }
    }

   // Update User Password --------------------------------------------------------------

    updatePassword() { 
        try {
            const sql = "UPDATE users"
        } catch (error){
            // res.status(500);
            console.log(error);
        }

    }

    // Verify User ----------------------------------------------------------------------

    verifyUser() {
        try {

        } catch (error){
            console.log(error);
        }
    }
}

export default AuthenticationModel;