// 'use strict';

// Imports
const config = require(`${process.env.PWD}/_config.js`);
const express = require('express');
const router  = express.Router();

const { About } = require('../app/controllers/aboutController');
const { Contact } = require('../app/controllers/contactController');
const { Home } = require('../app/controllers/homeController');
const { Portfolio } = require('../app/controllers/portfolioController');

const homeController = new Home();
const aboutController = new About();
const contactController = new Contact();
const portfolioController = new Portfolio();

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

// Contact page
router.get('/contact', contactController.index);




module.exports = router;
