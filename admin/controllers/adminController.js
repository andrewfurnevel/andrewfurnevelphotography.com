// adminController.js

'use strict';

// const config = require(`${process.env.APP_ROOT}/_config.js`);
// const UserModel = require(`${config.absPath.models}/UserModel.js`);

import absPath from '../../_config.js';
console.log(absPath);
import UserModel from '../../app/models/UserModel.js';

let userModel = new UserModel();

class Admin {
    constructor() {

    }

    async login(req, res) {

        res.render(`${absPath.views}/login`);

    }    

    async register(req, res) {

        let msg =[];
        res.render(`${absPath.adminViews}/register`, {msg});

    }

    async getUserById(req, res) {
        
        const id = req.params.id;
        
        let data = userModel.getUserById(id)
        .then((data) => {
            const data2 = {"Name" : "Andrew"};

            console.log(data.rows);
            res.render(`${absPath.adminViews}/get-user`, {data, data2});
            
        });
    }


    async getUsers(req, res) {

        let data = userModel.getUsers()
        .then((data) => {
            console.log(data.rows);
            res.render(`${absPath.adminViews}/get-users`, {data});
    
            });
        }


    // This is a test to see if I can return the inserted ID to use in another query

    async test(req, res) {
        console.log('Hello from test method in Admin Contorller');
        // let data = userModel.testReturnId()
        // .then((data) => {
        //         console.log(data.rows);
        //     });
    }    


    
    } // End Class
    
    export default Admin
    
    
    
    

//  This returns the item for each row. 
//  data.rows.forEach(item => console.log(item.user_id));

//  This returns the user_name for each row etc etc...
//  data.rows.forEach(item => console.log(item.user_name));

//  Returns all columns (fields), both keys and values, from row [n]. What ever the row in [] is.
//  console.log(Object.entries(data.rows[2]));

//  res.render('test', {data: `${userName}`});            
//  });


