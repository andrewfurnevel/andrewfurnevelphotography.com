// adminRoutes.js
// Handles routing of admin requests to relevant controllers.

'use strict';


import express from 'express'; 
const router  = express.Router();

import Admin from '../admin/controllers/adminController.js';
import Authentication from '../admin/controllers/authenticationController.js';

const adminController = new Admin();
const authenticationController = new Authentication();

// Testing Purposes
// const { Test } = require('../admin/controllers/testController');
import Test from '../admin/controllers/testController.js';
const testController = new Test();
// End Testing

// ADMIN ROUTES ------------------------------------------------------

router.post('/register', authenticationController.register);
// router.post('/login', authenticationController.checkLogin);
// router.post('/logout', authenticationController.logout);

router.post('/test', testController.test);


// Register Page
// router.get('/register', adminController.register);


router.get('/test', testController.test);




// Login Pagerouter.get('/login', adminController.login);
router.get('/login', adminController.login);

// Logout PageNeeded
// router.get('/logout', admimController.logout);


// Get User By Id (:id)
router.get('/get-user/:id', adminController.getUserById);

// Get All Users
router.get('/get-users', adminController.getUsers);

export default router;