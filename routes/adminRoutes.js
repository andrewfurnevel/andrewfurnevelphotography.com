const config = require(`${process.env.PWD}/_config.js`);
const express = require('express');
const router  = express.Router();

const { Admin } = require('../admin/controllers/adminController');

const adminController = new Admin();

// ADMIN ROUTES ------------------------------------------------------

// Get User By Id (:id)
router.get('/get-user/:id', adminController.getUserById);

// Get All Users
router.get('/get-users', adminController.getUsers);



module.exports = router;