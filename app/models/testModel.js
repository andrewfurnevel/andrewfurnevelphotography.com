'use strict';

// const { result } = require("lodash");

// const { getWorkTitle } = require("./workModel");

const DB = require(`${process.env.PWD}/classes/DB.js`);

function getUser() {

    let result = DB.pool.query('SELECT * FROM users WHERE user_id = 2', (err, res) => {
    // DB.pool.query('SELECT * FROM users WHERE user_id = 2', (err, res) => {
    
        if(err) {
            throw err;
            console.log(err);
        }
        // let data = (res.rows);
        // console.log(res);
        let data = res.rows;
        console.log(data); 
        // return (res);
    });
    // return result;
}
    // console.log(theQuery);
    
    // return "Boob";

    // NOTE: Looks like the problem is I'm trying to return the results of a nested function,
    // which is probably why it is coming up as undefined.
    // In the above example, the DB.pool...function isn't returning anywhere, so that the getUser()
    // function has nothing to retrun the controller. the result of the query needs to be returned
    // to the parent function (getUser) which in turn needs to return to the calling function from
    // the controller. Either that or the query function needs to become a callback to getUser.

// DB.pool.end()

exports.getUser = getUser;


function getTitle() {
    
    return 'Test Page Title from the Model';

    // let title = 'Test Page Title from the Model'
    // return title;
}

exports.getTitle = getTitle;