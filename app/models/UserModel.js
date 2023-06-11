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
            return result;

        } catch (error) {
            console.error(error);
        }

        finally {
            // Close connection
            // await pool.end()
            // console.log('DB Disconnected');
        }
    }

    async getUserByUserName (userName) {
            try  {
                const sql = `SELECT * FROM users WHERE user_name =$1`;
                const result = await this.pool.query(sql, [userName]);
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
