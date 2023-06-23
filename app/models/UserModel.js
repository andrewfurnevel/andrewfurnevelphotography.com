'use strict';

import Model from '../../system/Model.js';
class UserModel extends Model {

    constructor() {
        super();
        // this.constructorTest = "contructorTest"; // Not Working!!!
        // console.log(this.db);
        this.test = "UserModel test";
    }
    
    isRegistered = async (username) => {
        try {
            // console.log(this.test);
            // console.log(constructorTest); Not Working!!!
            const sql = `SELECT * FROM users WHERE user_name = $1`;
            let result = await this.pool.query(sql, [username]);
            return result = result.rowCount > 0 ? true : false;

        } catch (error) {
            console.log(error);
        }
    }


    async getUserById (userId) {

        try {
            const sql = `SELECT * FROM users WHERE user_id = $1`;
            const result = await this.pool.query(sql, [userId]);
            // .then (console.log(result.rowCount));
            // return result;
            
        } catch (error) {
            console.error(error);
        }
        
        finally {
            // Close connection
            // await pool.end()
            // console.log('DB Disconnected');
        }
    }
    
    async getUserByUsername (username) {
        try  {
            const sql = `SELECT * FROM users WHERE user_name = $1`;
            let result = await this.pool.query(sql, [username])
            return result = result.rowCount > 0 ? result : false;
            
        } catch (error) {
            console.log(error);
        }
    }

    async getUsers () {
    
        try {
            const sql = `SELECT * FROM users`;
            const result = await this.pool.query(sql);
            // console.log(result);

            return result;
                       
        } catch (error) {
            console.error(error);
        }
    } 

} // End Class

export default UserModel
