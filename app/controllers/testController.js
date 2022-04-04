'use strict';

const express = require('express');
// const router = express.Router();
const config = require(`${process.env.PWD}/_config.js`);
const model = require(`${config.absPath.models}/testModelclass.js`);


const test = async (req, res) => {
    const id = req.params.id;
    // const id = req.params.id;
 
    console.log(id);

    
    let data = new model.Model();

    let result;


    result = data.getUserById(id)
        .then((result) => {
        console.log(result.rows);
        // res.render('test', {data: `${result.rows[0].user_name}`});
                
        res.render(`${config.absPath.views}/test`, {result});
                
        console.log('There seems to be a problem with your request!');
                
    });
    
    // result = data.getAllUsers()
    // .then((result) => {
    //     try {
    //         res.render(`${config.absPath.views}/test`, {result});
    //     } catch {
    //         console.log('There seems to be a problem with your request!');        
    //     }
    // });

    // There below work! Just uncomment!
    // Get Single User
    // let result = data.getUserById(2)
    //     .then(function(result) {
    //         console.log(result.rows);
    //         res.render('test', {data: `${result.rows[0].user_name}`});
    //     });

    // This works - Just Uncomment   
    // Get All Users
    // let result = data.getAllUsers() 
    //     .then(function(result) {
    //         console.log(result.rows);
    //         // console.log(result.rows[0].user_name);

    //         // res.render('test', {data: `${result.rows[0].user_name}`});
    //         userName = result.rows[0].user_name;
            
    //         // This returns 9 when there are only eight keys. Now sure why?
    //         let num = Object.keys(result).length;
    //         console.log(num);
    //         console.log(); // Spacer
            
    //         // resultsArr = result.rows[0];

    //         // This returns the item for each row. 
    //         result.rows.forEach(item => console.log(item.user_id));

    //         // This returns the user_name for each row etc etc...
    //         result.rows.forEach(item => console.log(item.user_name));

    //         // Returns all columns (fields), both keys and values, from row [n]. What ever the row in [] is.
    //         console.log(Object.entries(result.rows[2]));

    //         res.render('test', {data: `${userName}`});            
    //     });

   

    // Get the page title from the model (database).
    // res.render('test', {title: `${data.getWorkTitle()}`});
    // res.render('test', {title: `${userName}`});
};
module.exports = { test }