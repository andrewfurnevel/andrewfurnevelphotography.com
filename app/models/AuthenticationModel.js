'use strict';

import Model from '../../system/Model.js';
import Message from '../../system/Message.js';
import bcrypt from 'bcrypt';

class AuthenticationModel extends Model {

    constructor() {
        super()
    }

    // The bcrypt code is to be abstracted to a helper function or class

    hashPassword(password) {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        console.log(hashedPassword);
        return hashedPassword;
    }

    compareHashedPassword(password, storedHashedPassword) {
        const passwordsMatch = bcrypt.compareSync(password, storedHashedPassword);

        if (passwordsMatch) {
        //   res.send('Login successful!');
          console.log('Login successful!');
        } else {
        //   res.send('Invalid credentials.');
          console.log('Invalid credentials.');
        }
    }

    // End Bcrypt Code --------------------------------




    login = async (username, password) => {

        try {   
             
            this.test();
            // this.hashPassword(password);

            // Compare Password

            const storedHashedPassword = '$2b$10$h0AJpgxrhhDu2w4x5GR.QO2suMsMdwVNNqCgAARAfqOo7P26xl.N6';

            
            
            const sql = `SELECT user_name, user_password FROM users WHERE user_name = $1 AND user_password = $2`;
            
            
            let result = await this.pool.query (sql, [ username, password ]);
            
            console.log(result.rows[0]);

            this.compareHashedPassword(password, storedHashedPassword);

            // const password = result.user_password;
            // const hashedPwd = bcrypt.hash(input.password);
                     
            if (result.rowCount > 0 ) {
                
                // console.log("true");
                return true;
            
            } else {
                // console.log("false");
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