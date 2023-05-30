// 'use strict';

// Imports
import dotenv from 'dotenv';
dotenv.config();

import { absPath } from '../_config.js';

// const express = require('express');
import express from 'express'; 

// console.log(absPath.controllers);

// const { Home } = require(`${config.absPath.controllers}/homeController`);
// import Home from absPath.controllers + '/homeController.js';
// const { About } = require(`${config.absPath.controllers}/aboutController`);
// const { Contact } = require(`${config.absPath.controllers}/contactController`);
// const { Portfolio } = require(`${config.absPath.controllers}/portfolioController`);
// const { Authentication } = require(`${config.absPath.controllers}/authenticationController`);

// const Home = await import(`${absPath.controllers}/homeController.js`);
import Home from '../app/controllers/homeController.js';
import About from '../app/controllers/aboutController.js';
import Contact from '../app/controllers/contactController.js';
import Portfolio from '../app/controllers/portfolioController.js';
// import Authentication from '../app/controllers/authrnticationController.js';
const router  = express.Router();
// console.log(router);
// module.exports = router;

// const publicRoutes = () => {
    // console.log(Home);
// console.log(router);

// const homeController = new Home;
// console.log(homeController.index);

const homeController = new Home();
console.log(homeController);
console.log(homeController.index);
console.log(router);

const aboutController = new About();
const contactController = new Contact();
const portfolioController = new Portfolio();
// const authenticationController = new Authentication();

// router.use((req, res, next) => {
//     console.log('New Request Made:');
//     console.log('Host:', req.hostname);
//     console.log('Path:', req.path);
//     console.log('Method:', req.method);
//     next();
// });
// console.log(homeController.index);

// console.log('Inside publicRoutes'); // Works !!!
    
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
// router.get('/login', authenticationController.login);

// Logout


// Register Page
// router.get('/register', authenticationController.register);


// }

// export default publicRoutes;
export default router;