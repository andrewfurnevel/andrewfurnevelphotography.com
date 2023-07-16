'use strict';



// Imports
// import express from 'express';
import absPath from '../../_config.js';
import Controller from '../../system/Controller.js';
import AuthenticationModel from '../models/AuthenticationModel.js';
import Validation from '../../system/Validation.js';
// import Message from '../../system/Message.js';
import UserModel from "../models/UserModel.js";

class Authentication extends Controller {
    constructor() { 
        super();

        this.authenticationModel = new AuthenticationModel;
        this.UserModel = new UserModel;
        this.validation = new Validation;

        // this.data = [];
        this.rules = [];
        // this.messages = [];
        // this.errors = [];

        // this.handleRegistration = this.handleRegistration.bind(this);

    }
    
    // Login Methods -------------------------------------------------------------------
    
    login = (req, res) => {
        
        let data = {
            errors: []
        };

        res.render(`${absPath.views}/login`, { data } );    
    }    
    
    handleLogin = async (req, res) => {

        let data = {
            errors: []
        };

        try {
            const { username, password } = req.body;
            
            let result = await this.authenticationModel.login(username, password);
            
            if (result === true ) {
                data.username = username;

                // Create Session and JWT
                res.render(`${absPath.views}/userArea`, { data } )

            } else {

                data.username = username;
                data.errors = 'Incorrect Username / Password Combination';
                res.render(`${absPath.views}/login`, { data } );
            }

        } catch(error) {
            res.status(500).send('Status 500: An error occured');
        }     
    } // End handleLogin Method
    
    
    logout = (req, res) => {
        res.render(`${absPath/views}/login`);
   
    } // End logout

    
    // Registration Methods ------------------------------------------------------------

    register = async (req, res) => {

        let data = {errors: [] };
        console.log(`At opening of register method, just after initialization of data array: ${data}`);
        
        res.render(`${absPath.views}/register`, { data });
    }
    
    handleRegistration = async (req, res) => {
        
        let data = { errors: [] };
        console.log(`At opening of handleRegistration method, just after initialization of data array: ${data}`);
               
            try {
            const { username, password, password_confirm } = req.body;
            let result = await this.authenticationModel.isRegistered(username);
            
            
            if (result === true) {
                data = { errors: [] };
                data.username = username;
                data.errors = "This username already exists. Please choose another.";
                res.render(`${absPath.views}/register`, { data });
                let data = { errors: [] };

            } else {
                data = { errors: [] };
                // Set the Rules for the Form Input Here
                this.validation.setRule(['User Name', 'username', req.body.username, ['alpha_numeric','min_length[8]', 'max_length[20]' ]]);
                this.validation.setRule(['Passsword', 'password', req.body.password, ['min_length[8]', 'require_special_chars']]);
                this.validation.setRule(['Confirm Password', 'password_confirm', req.body.password_confirm, [`matches[${password}]`]]);
                
                // Run the Input Validation
                this.validationErrors = this.validation.run();
                // console.log(this.validationErrors);

                data.username = username;
                data.errors.push(this.validationErrors);
                console.log(data.errors.length);
                console.log(data.errors);
                

                if (data.errors.length != 0) {
                    res.render(`${absPath.views}/register`, { data });
                    return;

                } else {
                    result = await this.authenticationModel.registerUser(username, password);

                    if (result) {
                        // Redirect to the login page
                        res.redirect('/login');
                    } else {
                        // Handle failed registration
                        res.send('Registration failed. Please try again.');
                    }
                }
            }

        } catch (error) {
            console.error(error);
            res.status(500).send('Status 500: An error occured [authenticaitonController]');
        }
      
    } // End register method
    
    verifyAccount = async () => {

    }



    // Password Methods ---------------------------------------------------------------

    resetPassword = async () => {
        
    }
    
    changePassword = async () => {
        
    }
    
    
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
                
                
                // test = (req, res) => {
                //     console.log(req.body.username);
                //     console.log(req.body.password);
                //     console.log(req.body);
                    
                //     let data = [];
                    
                //     if (error) {
                        
                //     }    
                // }  
                
                // res.render(`${config.absPath.adminViews}/login`)
                
                // async getUsers(req, res) {
            
                //     let data = userModel.getUsers()
                //     .then((data) => {
                //         console.log(data.rowCount);
                //         console.log(data.rows);
                //         res.render(`${absPath.adminViews}/get-users`, {data});
                
                //         });
                //     }
                
            } // End Class

export default Authentication;