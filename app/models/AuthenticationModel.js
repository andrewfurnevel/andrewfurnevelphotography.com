'use strict';

import Model from '../../system/Model.js';
import BcryptHelper from '../../system_helpers/BcryptHelper.js';

class AuthenticationModel extends Model {

    constructor() {
        super()
    }

    // Login  --------------------------------------------------------------------------

    login = async (username, password) => {
        
        try { 
            // No user with that username was found  
            const sql = `SELECT * FROM users WHERE user_name = $1`;
            const result = await this.pool.query (sql, [ username ]);
            
            // No username found or password mismatch: return false
            if (!result.rows[0] || !(await BcryptHelper.comparePasswords(password, result.rows[0].user_password))) {
                return false;
            }
            
            return result.rows[0];

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
            let result = await this.pool.query(sql, [ username ]);

            if (result.rows[0]) { 
                console.log(result.rows[0]);
                
                return true;
                
            } else {
                
                return false;

            }

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
            
        } catch (error) {
            console.error(error);
        }
    }

    // Verify User ----------------------------------------------------------------------

    setRefeshToken(refreshToken) {
        console.log(`setRefreshTokenMethod ${refreshToken}`); // Works!!!

        try {
            const sql = "INSERT INTO jwt (user_id, refresh_token);"

        } catch (error) {
            console.error(error);
        }
    }

    getRefreshToken() {

        try {
        } catch (error) {
            console.error(error);
        }
    }

    deleteRefreshToken() {

        try {

        } catch (error) {
            console.log(error);
        }
    }



}

export default AuthenticationModel;