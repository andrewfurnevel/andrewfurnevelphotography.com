'use strict';

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// NOTE: Need to turn this into a class and the functions into class methods.
// Could maybe do the same with the controllers classes. Child inherits Parent pattern.
// Figure out a way to pass an error message back to the view if no users are found.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const config = require(`${process.env.PWD}/_config.js`);
const UserModel = require(`${config.absPath.models}/UserModel.js`);

let userModel = new UserModel.UserModel();

const getUserById = async (req, res) => {
    const id = req.params.id;
    
    let data = userModel.getUserById(id)
    .then((data) => {
        console.log(data.rows);
        
        res.render(`${config.absPath.views}/get-user`, {data});
        
        // console.log('There seems to be a problem with your getUserById request!');
        
    });
}  

const getUsers = async (req, res) => {
    
    let data = userModel.getUsers()
    .then((data) => {
        console.log(data.rows);
        res.render(`${config.absPath.views}/get-users`, {data});
        
        // console.log('There seems to be a problem with your request!');        
        
    });
}
//  This returns the item for each row. 
//  data.rows.forEach(item => console.log(item.user_id));

//  This returns the user_name for each row etc etc...
//  data.rows.forEach(item => console.log(item.user_name));

//  Returns all columns (fields), both keys and values, from row [n]. What ever the row in [] is.
//  console.log(Object.entries(data.rows[2]));

//  res.render('test', {data: `${userName}`});            
//  });


module.exports = { 
    getUserById,
    getUsers
}