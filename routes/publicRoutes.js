// userRoutes.js
// Handles routing of users requests (formerly app requests) to relevant controllers.

'use strict';

// Imports
import express from 'express'; 
import Home from '../app/controllers/homeController.js';
import About from '../app/controllers/aboutController.js';
import Contact from '../app/controllers/contactController.js';
import Portfolio from '../app/controllers/portfolioController.js';
import Authentication from '../app/controllers/authenticationController.js';
import Registration from '../app/controllers/registerController.js';

import JWTHelper from '../system_helpers/JWTHelper.js';

import userArea from '../app/controllers/userAreaController.js'

const router  = express.Router();

const homeController = new Home();
const aboutController = new About();
const contactController = new Contact();
const portfolioController = new Portfolio();
const authenticationController = new Authentication();
const registerController = new Registration();

const userAreaController = new userArea();

// router.use((req, res, next) => {
//     console.log('New Request Made:');
//     console.log('Host:', req.hostname);
//     console.log('Path:', req.path);
//     console.log('Method:', req.method);
//     next();
// });
    
// PUBLIC ROUTES ------------------------------------------------------


// Site Page Routes

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


// Authentication / Registration Routes

// Login Page
router.get('/login', authenticationController.login);

// Login Page: Handle Login Form
router.post('/login', authenticationController.handleLogin);

// Logout
router.get('/loggedOut', authenticationController.logout);

// Register Page
router.get('/register', authenticationController.register);

// Register Page: Handle Registration Form
router.post('/register', authenticationController.handleRegistration);

// User Area
router.get('/userarea', JWTHelper.verifyToken, userAreaController.index);

// } 

export default router;