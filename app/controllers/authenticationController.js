'use strict';

// Imports
import express from 'express';
import absPath from '../../_config.js';
import bcrypt from 'bcrypt';
import UserModel from '../models/UserModel.js';
import Validation from '../../system/Validation.js';

class Authentication {
    constructor() { 
       
    }
    
    async login(req, res) {

        res.render(`${absPath.views}/login`);

    }    

    async logout(req, res) {

    }



    async register(req, res) {

        if (req.method == 'GET') {
            console.log('New Form');
            const msg = [];
            await res.render(`${absPath.views}/register`, {msg});
            
        }  
        
        if (req.method == 'POST') {
            const userModel = new UserModel();
            let data = userModel.getUserByUsername(req.body.username);
            console.log(data.rows);

            const validation = new Validation();
            const validationRules = {"username" : "isEmpty, isMinLength = 8"};
            
            const msg = [];
            
            console.log('Submitted Form');
            await res.render(`${absPath.views}/register`, {msg});
        }

        const valRules = {"username" : "isEmpty, isMinLength=8"};
        
        // validation.run(req.body, valRules);
        // // if (result.rowcount === 0) {
        
        // //         // Hash & Salt
        // //         const hash = await bcrypt.has(req.body.password, 10)
        // // console.log(req.body.username);
        // // console.log(req.body.password);
        // // console.log(req.body.password_confirm);
        // // console.log(req.body);
        // let msg = [];

        // if (req.body.password !== req.body.password_confirm) {

        //     // Create Validation Utility Class
        //     msg.push('The passwords did not match!');

        //     console.log(msg);
        //     res.render(`${absPath.adminViews}/register`, {msg})

        // } else {
            
        //     // Send to the Login Model to be written to the database.
        //     console.log("Entered in Database");
        //     res.render(`${absPath.adminViews}/admin`)
        // }
    }
    
    async resetPassword() {

    }

    async changePassword() {

    }

    async verifyAccount() {}

    async test(req, res) {
        console.log(req.body.username);
        console.log(req.body.password);
        console.log(req.body);

        let data = [];

        if (error) {

        }

    }  

    // res.render(`${config.absPath.adminViews}/login`)


} // End Class

export default Authentication;