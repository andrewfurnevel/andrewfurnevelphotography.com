'use strict';

import Model from '../../system/Model.js';
import Message from '../../system/Message.js';
import bcrypt from 'bcrypt';
import BcryptHelper from '../../system_helpers/BcryptHelper.js';

class AuthenticationModel extends Model {

    constructor() {
        super()
    }

    

 
    
    
    
    // End Bcrypt Code --------------------------------
    
    
    
    
    login = async (username, password) => {
        
        let authPassword = false;

        try {   

            // BcryptHelper.test();
            
            // console.log(BcryptHelper.hashPassword(password));
            
            
            // const hashedPassword = this.hashPassword(password);
            // console.log(hashedPassword);
            
            // const sql = `SELECT user_name, user_password FROM users WHERE user_name = $1 AND user_password = $2`;
            
            console.log(username, password);
            
            
            const sql = `SELECT * FROM users WHERE user_name = $1`;
            
            let result = await this.pool.query (sql, [ username ]);
            
            const hashedPass = result.rows[0].user_password;
            // console.log(result);
            
            console.log(hashedPass);
            
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

    updatePassword() { 
        try {

        } catch (error){
            // res.status(500);
            console.log(error);
        }

    }

    verifyAccount() {
        try {

        } catch (error){
            console.log(error);
        }

    }

}

export default AuthenticationModel;