// 'use strict';

const express = require('express');
const router  = express.Router();
const config = require(`${process.env.PWD}/_config.js`);

const staticPageController = require(`${config.absPath.controllers}/staticPageController`);
const workController = require(`${config.absPath.controllers}/workController`);
const testController = require(`${config.absPath.controllers}/testController`);


// router.use((req, res, next) => {
//     console.log('New Request Made:');
//     console.log('Host:', req.hostname);
//     console.log('Path:', req.path);
//     console.log('Method:', req.method);
//     next();
// });

// Home Page - Default
router.get('/', staticPageController.index);

// Home Page - Home
router.get('/home', staticPageController.index);

// About Page
router.get('/about', staticPageController.about);

// Work Page
router.get('/work', workController.work);

// Contact page
router.get('/contact', staticPageController.contact);

// Get User By Id (:id)
router.get('/test/:id', testController.test);

// Get All Users - This does not work!!!
router.get('/get-users', testController.getUsers);


module.exports = router;