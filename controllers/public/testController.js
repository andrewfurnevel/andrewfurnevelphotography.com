'use strict';

const express = require('express');
const { getUser } = require('../../models/testModel');
const config = require(`${process.env.PWD}/_config.js`);
const model = require(`${config.absPath.models}/testModelclass.js`);


const test = (req, res) => {

    let resultsArr = {};
    let userName = '';

    let data = new model.Model();

    // let result;

    let result = data.getUserById(2)
        .then(function(result) {
            console.log(result.rows);
            res.render('test', {data: `${result.rows[0].user_name}`});
        });

    // result = data.getAllUsers() 
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
           
    //         // Not Working...
    //         // for (const [key, value] of Object.entries(result.row)) {
    //         //     console.log(`${key}: ${value}`);
    //         // }

    //         // Returns all columns (fields), both keys and values, from row [n]. What ever the row in [] is.
    //         console.log(Object.entries(result.rows[2]));

    //         // console.log(typeof(result.rows)); // returns object

    //         // console.log(resultsArr[0].user_id)

    //         res.render('test', {data: `${userName}`});            
    //     });
        
        // console.log(`Username: ${userName}`);
   
    // console.log(data.testModel());
    // console.log(`Data.getUser: ${data.getUser()}`);

   

    // Get the page title from the model (database).
    // res.render('test', {title: `${data.getWorkTitle()}`});
    // res.render('test', {title: `${userName}`});
};

exports.test = test;
