'use strict';

// Imports
const express = require('express');
// const bcrypt = require('bcrypt');
const config = require(`${process.env.APP_ROOT}/_config.js`);
const UserModel = require(`${config.absPath.models}/UserModel.js`);
const { Validation } = require(`${config.absPath.system}/Validation.js`);

class Authentication {
    constructor() { 
        
    }
    
    async login(req, res) {

        res.render(`${config.absPath.views}/login`);

    }    

    async logout(req, res) {

    }

    async register(req, res) {

        let msg =[];
        res.render(`${config.absPath.adminViews}/register`, {msg});
    }
    



    async register(req, res) {
        const validation = new Validation();

        const valRules = {"username" : "isEmpty, isMinLength=8"};
        
        validation.run(req.body, valRules);
        // if (result.rowcount === 0) {
        
        //         // Hash & Salt
        //         const hash = await bcrypt.has(req.body.password, 10)
        // console.log(req.body.username);
        // console.log(req.body.password);
        // console.log(req.body.password_confirm);
        // console.log(req.body);
        let msg = [];

        if (req.body.password !== req.body.password_confirm) {

            // Create Validation Utility Class
            msg.push('The passwords did not match!');

            console.log(msg);
            res.render(`${config.absPath.adminViews}/register`, {msg})

        } else {
            
            // Send to the Login Model to be written to the database.
            console.log("Entered in Database");
            res.render(`${config.absPath.adminViews}/admin`)
        }
    }
            

    async checkLogin(req, res) {
        console.log(req.body.username);
        console.log(req.body.password);
        console.log(req.body);

        let data = [];

        if (error) {

        }

    }  

    // res.render(`${config.absPath.adminViews}/login`)


} // End Class

module.exports = { Authentication }