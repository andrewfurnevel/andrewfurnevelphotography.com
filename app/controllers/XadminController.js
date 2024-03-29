// 'use strict';

import config from '../../_config.js';
import UserModel from '../models/UserModel.js';

const userModel = new UserModel();

class Admin {
    constructor() {
        
    }

    getUserById = async (req, res) => {
        
        const id = req.params.id;
        
        let data = userModel.getUserById(id)
        .then((data) => {
            const data2 = {"Name" : "Andrew"};

            console.log(data.rows);
            res.render(`${config.absPath.views}/get-user`, {data, data2});
            
        });
    }


    getUsers = async (req, res) => {

        let data = userModel.getUsers()
        .then((data) => {
                console.log(data.rows);
                res.render(`${config.absPath.views}/get-users`, {data});
    
        });
    }
    
} // End Class

export default Admin;
    
    
//  This returns the item for each row. 
//  data.rows.forEach(item => console.log(item.user_id));

//  This returns the user_name for each row etc etc...
//  data.rows.forEach(item => console.log(item.user_name));

//  Returns all columns (fields), both keys and values, from row [n]. What ever the row in [] is.
//  console.log(Object.entries(data.rows[2]));

//  res.render('test', {data: `${userName}`});            
//  });


