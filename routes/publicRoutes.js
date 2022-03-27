// 'use strict';

const express = require('express');
const router  = express.Router();

const staticPageController = require('../controllers/public/staticPageController');
const workController = require('../controllers/public/workController');
const testController = require('../controllers/public/testController');

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
router.get('/about', staticPageController.about)

// Work Page
router.get('/work', workController.work);

// Contact page
router.get('/contact', staticPageController.contact);

// // Home Page - Default
// router.get('/', (req, res) => {
//     res.render('index', {title: 'Home'});
// });


router.get('/test', testController.test);

module.exports = router;