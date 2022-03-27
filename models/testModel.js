'use strict';

// const { getWorkTitle } = require("./workModel");

const DB = require(`${process.env.PWD}/classes/DB.js`);

// pool.query('SELECT * FROM users ORDER BY user_id ASC', (err, res) => {
//     //   console.log(err, res)
//         if(err) {
//             throw err
//         }
//         let data = res.rows;
//         console.log(data);
    
//     pool.end()
    
//     })


function getWorkTitle() {

}

exports.getWorkTitle = getWorkTitle;