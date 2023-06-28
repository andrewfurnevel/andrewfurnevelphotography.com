'use strict';

import Model from '../../system/Model.js';
import Message from '../../system/Message.js';
import bcrypt from 'bcrypt';

class AuthenticationModel extends Model {

    constructor() {
        super()
    }

    login = async (username, password) => {

        try {    
            
            const sql = `SELECT user_name, user_password FROM users WHERE user_name = $1`;
            
            let result = await this.pool.query (sql, [username]);

            // console.log(result.rows[0].user_name);
            // console.log(result.rows[0].user_password);
            // console.log(result.rows[0].user_name, result.rows[0].user_password);
            // const password = result.user_password;
            // const hashedPwd = bcrypt.hash(input.password);
            
            // console.log(input.username, input.password);
            
            if (result.rowCount > 0 ) {
                console.log(result.rows[0].user_name);
                
                return true;
            
            } else {

                return false;

            }
            
        
        } catch (error) {
            console.log(error(error));
            res.status(500).send('An error occured');
        }
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