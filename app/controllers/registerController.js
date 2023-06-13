'use strict';

// Imports
import express from 'express';
import absPath from '../../_config.js';
import UserModel from '../models/UserModel.js';
import Validation from '../../system/Validation.js';
import Authentication from '../../system/Authentication.js';

class Registration {

    constructor() {
        // this.validation = new Validation();
        // this.authentication = new Authentication();
        // this.authentication = this.authentication.bind(this);
        // this.userModel = new UserModel();
        console.log("This Worked!!!");
        this.someVar = "Helloooo!";
        console.log(this.someVar);
    }
    
    register(req, res) {
        let msg = [];

        if (req.method === 'GET') {
            msg = [];
            res.render(`${absPath.views}/register`, {msg});
            console.log(this.someVar);
            
            
        } else if(req.method === 'POST'){
            // console.log("Form Sent");
            // this.authentication.test();
            const authentication = new Authentication();
            authentication.test();

            // isUser(res, req);
            // temp_form_validation();
        }
    }
        // const validation = new Validation();

        // const valRules = {"username" : "isEmpty, isMinLength=8"};
        
        // validation.run(req.body, valRules);

        // console.log(req.body.username);
        // console.log(req.body.password);
        // console.log(req.body.password_confirm);

        // if (result.rowcount === 0) {
        
        // Hash & Salt
        // const hash = await bcrypt.has(req.body.password, 10)
        // console.log(req.body.username);
        // console.log(req.body.password);
        // console.log(req.body.password_confirm);
        // console.log(req.body);

        async isUser(res, req) {
            // console.log("This User is Already Registered");
            const userModel = new UserModel;
            const data = userModel.getUserByUsername(req.body.username);
            
            
            console.log(data);

            if (result == req.body.username) {
                // msg.push("That username already exists");
                console.log("That user already exists");
            }
        }


        async temp_form_validation(){
            // Temp validation
            if (!req.body.username) {
                msg.push('You must enter a Username!');
            }
            // if (req.body.password === req.body.password_confirm) {
            //     msg.push('The passwords do not match');
            // } else {
            //     console.log(req.body);
            //     console.log ('Validaiton Passed');
            //     console.log('The form has been submitted.');
            // }
            console.log(req.body.username);
            console.log(req.body.password);
            console.log(req.body.password_confirm);
            
            if (msg.length > 0) {
                console.log (msg);
            }
        

        }
        
        // if (req.body.password !== req.body.password_confirm) {

        //     // Create Validation Utility Class
        //     msg.push('The passwords did not match!');

        //     // console.log(msg);
        //     res.render(`${absPath.views}/register`, {msg})

        // } else {
            
        //     // Send to the Login Model to be written to the database.
        //     // console.log("Entered in Database");
        //     res.render(`${absPath.adminViews}/admin`)
        // }
}

    // res.render(`${absPath.adminViews}/login`)


// End Class

export default Registration;