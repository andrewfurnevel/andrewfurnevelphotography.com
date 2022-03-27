'use strict';

const express = require('express');
const config = require(`${process.env.PWD}/_config.js`);
const DB = require(`${process.env.PWD}/classes/DB.js`);

// This now works!
console.log(`This is the pool from the DB class - ${DB.pool}`);


const test = (req, res) => {
    const data = require(`${config.absPath.models}/testModel`);

    
    res.render('work', {title: 'Test Page'});

    // Get the page title from the model (database).
    res.render('test', {title: `${data.getWorkTitle()}`});
};

const Pool = require('pg').Pool

// Assign Environment Variables
// const pool = new Pool({
//     host: config.db.host,
//     port: config.db.port,
//     user: config.db.username,
//     password: config.db.password,
//     database: config.db.database
// });

DB.pool.query('SELECT * FROM users WHERE user_id = 2', (err, res) => {
//   console.log(err, res)
    if(err) {
        throw err
    }
    let data = res.rows;
    console.log(data);

    DB.pool.end()

})


exports.test = test;



// NOTE: This works! 
// Need to now move the query to a testModel and return data back to controller then pass it to the view to display.