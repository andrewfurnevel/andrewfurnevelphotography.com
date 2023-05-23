'use strict';

require('dotenv').config();

// Import modules
// const config = require(`${process.env.APP_ROOT}/_config.js`);
const config = require(`./_config.js`);

const express = require('express');
// const { path } = require('express/lib/application');

console.log(__dirname);

const app = express(); 

const publicRoutes =  require(`${__dirname}/routes/publicRoutes.js`);
const adminRoutes = require (`${__dirname}/routes/adminRoutes.js`);

// Register View Engine
app.set('view engine', 'ejs');

app.listen(443, err => {
    if (err) {
        console.log("There was a problem", err);
        return;
    }
    console.log("Listening on port 443");
});

// Static Files
app.use(express.static('public'));

// Routes

// Handle Post Requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/admin", adminRoutes);
app.use("/", publicRoutes);

// 404 Page Not Found
app.use((req, res) => {
    res.status(404).render(`${config.absPath.views}/404`, {title: 'Page Not Found'});
});









