'use strict';

import Model from '../../system/Model.js';
// import Message from '../../system/Message.js';
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

        // console.log("Inside isRegistered");

        try {
            const sql = `SELECT * FROM users WHERE user_name = $1`;
            let result = await this.pool.query(sql, [ username ]);

            if (result.rows[0]) { 
                console.log(result.rows[0]);
                
                return true;
                
            } else {
                
                // console.log("This username is available");
                return false;

            }
            // Message.error = 'This Username is Already Registered';
            // return result = { username };

        } catch (error) {
            console.log(error);
        }
    }

    // Register New User ----------------------------------------------------------------

    registerUser = async (username, password) => {

        // console.log(username, password);

        try {
            const hashedPassword = BcryptHelper.hashPassword(password);

            const sql = "INSERT INTO users (user_name, user_password, user_created, user_last_active, user_verified) VALUES ($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'false')";

            let result = await this.pool.query(sql, [username, hashedPassword]);
            
            return true;
          
          } catch (error) {
            console.error(error);
          }
    }

   // Update User Password --------------------------------------------------------------

    updateUserPassword() { 

        try {
            const sql = "UPDATE users"
        } catch (error){
            // res.status(500);
            console.error(error);
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