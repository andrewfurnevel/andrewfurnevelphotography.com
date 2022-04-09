'use strict';

// Imports
const express = require('express');
const bcrypt = require('bcrypt');
const config = require(`${process.env.PWD}/_config.js`);
const UserModel = require(`${config.absPath.models}/UserModel.js`);


class Authentication {
    constructor() { 
        
    }
    
    register = async (req, res) => {
        // if (result.rowcount === 0) {
        
        //         // Hash & Salt
        //         const hash = await bcrypt.has(req.body.password, 10)
        // console.log(req.body.username);
        // console.log(req.body.password);
        // console.log(req.body.password_confirm);
        // console.log(req.body);
        let data = [];

        if (req.body.password !== req.body.password_confirm) {

            data.push('The passwords did not match!');

            console.log(data);
            res.render(`${config.absPath.adminViews}/register`, {data})
        } else {
            console.log("Entered in Database");
            res.render(`${config.absPath.adminViews}/admin`)
        }
    }
            

    checkLogin = async (req, res) => {
    console.log(req.body.username);
        console.log(req.body.password);
        console.log(req.body);

        

    // res.render(`${config.absPath.adminViews}/login`)

    }
    
    logout = async (req, res) => {}

} // End Class


module.exports = { Authentication }