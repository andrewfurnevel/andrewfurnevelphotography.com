'use strict';

class RegisterUserModel {
    contructor() {

    }

    userExist() {

    }

    registerUser () {

        try {
            let sql = `SELECT user_name FROM users`;

            let result  = await.pool.query(sql, [user_name]);

            if ( result.rowCount = 0 ) {
                console.log("Does Not Exist");
            }


        //     sql = `INSERT INTO users VALUES $1, $2, $3`;
        //     result = await this.pool.query(sql, [user_name, user_password, user_hash]);
        // return result;

        } catch(error) {
            console.log(error);

        } finally { 

        }
        
    }

    
} // End Class

module.exports = { RegisterUserModel }