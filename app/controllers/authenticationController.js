'use strict';

// Imports
// import express from 'express';
import absPath from '../../_config.js';
import bcrypt from 'bcrypt';
import UserModel from '../models/UserModel.js';
import Validation from '../../system/Validation.js';

class Authentication {
    constructor() { 
    this.userModel = new UserModel();
    // this.test = "Testing"; // Works!!!
    this.messages = [];

    }
    
    login = (req, res) => {

        res.render(`${absPath.views}/login`);

    }    

    logout = async (req, res) => {

    }

    async getUsers(req, res) {

        let data = userModel.getUsers()
        .then((data) => {
            console.log(data.rowCount);
            console.log(data.rows);
            res.render(`${absPath.adminViews}/get-users`, {data});
    
            });
        }

    register = async (req, res) => {
        console.log(this.test);
        if (req.method == 'GET') {
            const msg = [];
            res.render(`${absPath.views}/register`, {msg});   
        }  
        
        if (req.method == 'POST') {
            const userModel = new UserModel();
            let data = await this.userModel.isRegistered(req.body.username)
            console.log(data);

            if (data > 0) {
                this.messages.push("This Username is already registered");
                // console.log(this.messages); // Works!!!
                
            } else {
                
                const validation  = new Validation();
                // The rule format below is wrong. See the error message in the try catch block.
                // See admin/controllers/testController.js for correct format.
                
                const validationRules = {"username" : "isEmpty, isMinLength = 8"};
                validation.run(req.body, validationRules);
                // console.log(req.body);
                
            }
        }
    } // End register method

            
            // // console.log(data.rowCount);

            // if (data.rowCount != 0) {

            //     console.log("This user is already registered");


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
    
    resetPassword = () => {

    }

    changePassword = () => {

    }

    verifyAccount = () => {}

    test = (req, res) => {
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