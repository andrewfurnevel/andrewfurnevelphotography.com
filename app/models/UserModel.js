'use strict';

// const config = require(`${process.env.APP_ROOT}/_config.js`);
// const Model = require(`${process.env.APP_ROOT}/system/Model.js`);

import Model from '../../system/Model.js';

class UserModel extends Model {

    constructor() {
        super();
        // console.log(this.db);
    }
    
    
    async getUserById (userId) {

        try {
            const sql = `SELECT * FROM users WHERE user_id = $1`;
            const result = await this.pool.query(sql, [userId])
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
            console.log("getUserByUsername");
            // console.log(username);
            const sql = `SELECT * FROM users WHERE user_name = $1`;
            const result = await this.pool.query(sql, [username])
            // console.log(result.rowCount); // This works

            return result;
            
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
