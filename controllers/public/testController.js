'use strict';

const express = require('express');
const { getUser } = require('../../models/testModel');
const config = require(`${process.env.PWD}/_config.js`);
const model = require(`${config.absPath.models}/testModelclass.js`);


const test = (req, res) => {

    let data = new model.Model();
    // data.getUserById(2);
    // data.retrieveData();
    let result;
    result = data.retrieveData().then(function(result){console.log(result.rows)
    });
    // (console.log(result));
    // console.log(`sController: ${result}`);

     // console.log(data.getUser());
    // let title = data.getTitle();
    // console.log(title);
  

    // let user = await data.getUser();
    

    // console.log(`User Data: ${user}`);
    
    // console.log(data.testModel());
    // console.log(`Data.getUser: ${data.getUser()}`);

    // res.render('test', {title: `${data.getTitle()}`});

    // Get the page title from the model (database).
    // res.render('test', {title: `${data.getWorkTitle()}`});
    res.render('test', {title: `Test Controller`});
};

// const Pool = require('pg').Pool

// Assign Environment Variables
// const pool = new Pool({
//     host: config.db.host,
//     port: config.db.port,
//     user: config.db.username,
//     password: config.db.password,
//     database: config.db.database
// });

// DB.pool.query('SELECT * FROM users WHERE user_id = 2', (err, res) => {
// //   console.log(err, res)
//     if(err) {
//         throw err
//     }
//     let data = res.rows;
//     console.log(data);

//     DB.pool.end()

// })


exports.test = test;
