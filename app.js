'use strict';


require('dotenv').config();
// const {ENVIRONMENT, HOST, PORT} = process.env;
// global.basedir = __dirname;
// console.log(__dirname);

// Import modules
const config = require('./_config');
const express = require('express');
const app = express(); 

const publicRoutes =  require(`${config.absPath.routes}/publicRoutes.js`);
const adminRoutes = require (`${config.absPath.routes}/adminRoutes.js`);

// Register View Engine
app.set('view engine', 'ejs');

app.listen(3000, err => {
    if (err) {
        console.log("There was a problem", err);
        return;
    }
    console.log("Listening on port 3000");
});

// Used for POST and PUT requests    
// app.use(express.urlencoded({extended: true}));

// Static Files
app.use(express.static('public'));

// Routes
app.use("/admin", adminRoutes);
app.use("/", publicRoutes);


// 404 Page Not Found
app.use((req, res) => {
    res.status(404).render(`${config.absPath.views}/404`, {title: 'Page Not Found'});
});




