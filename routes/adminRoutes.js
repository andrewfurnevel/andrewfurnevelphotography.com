const config = require(`${process.env.APP_ROOT}/_config.js`);

const express = require('express');
const router  = express.Router();

const { Admin } = require('../admin/controllers/adminController');
const { Authentication } = require('../admin/controllers/authenticationController');

const adminController = new Admin();
const authenticationController = new Authentication();

// Testing Purposes
const { Test } = require('../admin/controllers/testController');
const testController = new Test();
// End Testing

// ADMIN ROUTES ------------------------------------------------------

router.post('/register', authenticationController.register);
router.post('/login', authenticationController.checkLogin);
router.post('/logout', authenticationController.logout);

router.post('/test', testController.test);


// Register Page
router.get('/register', adminController.register);

// Login Pagerouter.get('/login', adminController.login);


router.get('/test', testController.test);

// Logout Page
// router.get('/logout', admimController.logout);


// Get User By Id (:id)
router.get('/get-user/:id', adminController.getUserById);

// Get All Users
router.get('/get-users', adminController.getUsers);


module.exports = router;