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

const router  = express.Router();

const homeController = new Home();
const aboutController = new About();
const contactController = new Contact();
const portfolioController = new Portfolio();
const authenticationController = new Authentication();
const registerController = new Registration();

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
// router.get('/loggedOut', authenticationController.loggedOut);


// Register Page
router.get('/register', registerController.register);

// Register Form Submitted Page
router.post('/register', registerController.register);


// } 

export default router;