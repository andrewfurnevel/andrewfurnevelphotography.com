'use strict';

// import { someObject, someFunction } from './import-test.js';
// console.log(someFunction());

// console.log(someObject.name);
// console.log(someObject.email);

// require('dotenv').config();
import dotenv from 'dotenv';
dotenv.config();

// console.log(dotenv.config);
// console.log(__dirname);

// console.log('Bob');
// Import modules
// const config = require(`${process.env.APP_ROOT}/_config.js`);
// const config = require(`./_config.js`);

// const express = require('express');
import express from 'express';
const app = express(); 
// const { path } = require('express/lib/application');

import { absPath } from './_config.js';
// console.log(absPath.routes);
import test from './test.js';
import someFunction from './test.js';
someFunction();

import publicRoutes from './routes/publicRoutes.js';
// console.log(publicRoutes);
// import adminRoutes from './routes/adminRoutes.js';
// const publicRoutes =  require(`${__dirname}/routes/publicRoutes.js`);
// const adminRoutes = require (`${__dirname}/routes/adminRoutes.js`);

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


// app.use("/admin", adminRoutes);
app.use("/", publicRoutes);

// 404 Page Not Found
app.use((req, res) => {
    res.status(404).render('./views/404', {title: 'Page Not Found'});
});









