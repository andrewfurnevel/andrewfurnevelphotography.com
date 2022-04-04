// 'use strict';

const express = require('express');
const router  = express.Router();
const config = require(`${process.env.PWD}/_config.js`);

const adminController = require(`${config.absPath.adminControllers}/admin-authentication`);

router.get('/login' , adminController.login);

module.exports = router;