'use strict';

// Imports
import express from 'express';
import bcrypt from 'bcrypt';
import config from '../../_config.js';
import UserModel from '../../app/models/UserModel.js';
import Validation from '../../system/Validation.js';

class Authentication {
    constructor() { 
        
    }
    
    async login(req, res) {
        console.log("Got here");
    }
    
    

    async logout(req, res) {

    }


    async register(req, res) {
        const validation = new Validation();

        // const valRules = {"username" : "isEmpty, isMinLength=8"};

        // Load New Form
        if (this.register.method === 'GET') {
            console.log('New Form');
            msg = [];
            res.render(`${absPath.views}/register`, {msg});

        } else {
            // Process Completed Form
            console.log('Processed Form');

        }
        
        // validation.run(req.body, valRules);

        // console.log(req.body.username);
        // console.log(req.body.password);
        // console.log(req.body.password_confirm);

        // if (result.rowcount === 0) {
        
        //         // Hash & Salt
        //         const hash = await bcrypt.has(req.body.password, 10)
        // console.log(req.body.username);
        // console.log(req.body.password);
        // console.log(req.body.password_confirm);
        // console.log(req.body);
        // let msg = [];

        // if (req.body.password !== req.body.password_confirm) {

        //     // Create Validation Utility Class
        //     msg.push('The passwords did not match!');

        //     console.log(msg);
        //     res.render(`${config.absPath.adminViews}/register`, {msg})

        // } else {
            
        //     // Send to the Login Model to be written to the database.
        //     console.log("Entered in Database");
        //     res.render(`${config.absPath.adminViews}/admin`)
        // }
    }
            

    // async checkLogin(req, res) {
    //     console.log(req.body.username);
    //     console.log(req.body.password);
    //     console.log(req.body);

    //     let data = [];

    //     if (error) {

    //     }
    // }  

    // res.render(`${config.absPath.adminViews}/login`)


} // End Class

export default Authentication;