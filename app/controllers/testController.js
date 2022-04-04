'use strict';

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// NOTE: Need to turn this into a class and the functions into class methods.
// Put the database connection into the model contructor and into a parent moel class and 
// create a child class that inherits from the parent class.
// Could maybe do the same with the controllers classes. Child inherits Parent pattern.
// Figure out a way to pass an error message back to the view if no users are found.
// Change the result var to data and the data var to query
// Change the function named 'test' to 'getUserById' or something more relevent.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const config = require(`${process.env.PWD}/_config.js`);
const TestModel = require(`${config.absPath.models}/testModelclass.js`);


const test = async (req, res) => {
    const id = req.params.id;
    // const id = req.params.id;
 
    console.log(`ID: ${id}`);

    let data = new TestModel.TestModel();
    let result;
    
    result = data.getUserById(id)
    .then((result) => {
        console.log(result.rows);
        // res.render('test', {data: `${result.rows[0].user_name}`});
        
        res.render(`${config.absPath.views}/test`, {result});
        
        // console.log('There seems to be a problem with your getUserById request!');
        
    });
}  

const getUsers = async (req, res) => {
    
    let data = new TestModel.TestModel();
    let result;
    
    console.log('getUsers was called!');
    result = data.getAllUsers()
    .then((result) => {
        console.log(result.rows);
        res.render(`${config.absPath.views}/get-users`, {result});
 
        // console.log('There seems to be a problem with your request!');        

    });
}


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

module.exports = { 
    test,
    getUsers
}