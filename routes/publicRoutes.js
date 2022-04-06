// 'use strict';

const express = require('express');
const { Home } = require('../app/controllers/homeController');
const router  = express.Router();
const config = require(`${process.env.PWD}/_config.js`);

const staticPageController = require(`${config.absPath.controllers}/staticPageController`);
const workController = require(`${config.absPath.controllers}/workController`);
const adminController = require(`${config.absPath.controllers}/adminController`);
const homeController = require(`${config.absPath.controllers}/homeController`);

console.log(Home);
home = new Home();
console.log(home.index);
// console.log(home.index());

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
// router.get('/home', staticPageController.index);

// About Page
router.get('/about', staticPageController.about);

// Work Page
router.get('/work', workController.work);

// Contact page
router.get('/contact', staticPageController.contact);

// Get User By Id (:id)
router.get('/get-user/:id', adminController.getUserById);

// Get All Users - This does not work!!!
router.get('/get-users', adminController.getUsers);

router.get('/home', home.index);


module.exports = router;