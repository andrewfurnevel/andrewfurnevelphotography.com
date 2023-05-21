// 'use strict';

// Imports

const config = require(`${process.env.APP_ROOT}/_config.js`);

const express = require('express');
const router  = express.Router();

const { Home } = require(`${config.absPath.controllers}/homeController`);
const { About } = require(`${config.absPath.controllers}/aboutController`);
const { Contact } = require(`${config.absPath.controllers}/contactController`);
const { Portfolio } = require(`${config.absPath.controllers}/portfolioController`);
const { Authentication } = require(`${config.absPath.controllers}/authenticationController`);


const homeController = new Home();
const aboutController = new About();
const contactController = new Contact();
const portfolioController = new Portfolio();
const authenticationController = new Authentication();

// router.use((req, res, next) => {
//     console.log('New Request Made:');
//     console.log('Host:', req.hostname);
//     console.log('Path:', req.path);
//     console.log('Method:', req.method);
//     next();
// });



// PUBLIC ROUTES ------------------------------------------------------

// Home '/', index, home - Default
router.get('/', homeController.index);
router.get('/index', homeController.index);
router.get('/home', homeController.index);

// About Page
router.get('/about', aboutController.index);

// Work Page
router.get('/work', portfolioController.index);

// Contact Page
router.get('/contact', contactController.index);

// Login Page
router.get('/login', authenticationController.login);

// Logout


// Register Page
router.get('/register', authenticationController.register);



module.exports = router;
