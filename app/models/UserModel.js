'use strict';

const config = require(`${process.env.PWD}/_config.js`);
const Model = require(`${process.env.PWD}/classes/Model.js`);

class UserModel extends Model {

    constructor() {
        super();
    }
    
    
    getUserById = async (userId) => {

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


    getUsers = async () => {
    
        try {
            const sql = `SELECT * FROM users`;
            const result = await this.pool.query(sql);
            return result;
                       
        } catch (error) {
            console.error(error);
        }
    } 

} // End Class

module.exports = { UserModel }
