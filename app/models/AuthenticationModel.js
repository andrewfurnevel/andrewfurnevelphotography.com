'use strict';

import Model from '../../system/Model.js';
import bcrypt from 'bcrypt';

class AuthenticationModel extends Model{

    constructor() {
        super()
    }

    login = async (input) => {
        try {
        const sql = `SELECT user_name, user_password FROM users WHERE user_name = $1`;
        let result = await this.pool.query (sql, [input.username]);

        // console.log(result.rows[0].user_name);
        // console.log(result.rows[0].user_password);
        console.log(result.rows[0].user_name, result.rows[0].user_password);
        // const password = result.user_password;
        // const hashedPwd = bcrypt.hash(input.password);

        // console.log(input.username, input.password);
        
        if (result.rowCount > 0 ) {
            result = true;
        } else {
            result = false;
        }
        return result
        
        } catch (error) {
            // res.status(500);
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