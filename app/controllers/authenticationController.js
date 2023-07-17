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

        // this.handleRegistration = this.handleRegistration.bind(this);

    }
    
    // Login Methods -------------------------------------------------------------------
    
  
    login = (req, res) => {
        const data = {};
        const errors = [];
        
        return res.render(`${absPath.views}/login`, { data, errors });
      };  
    
    handleLogin = async (req, res) => {

        try {
            let data = {};
            let errors = [];
            const { username, password } = req.body;
            
            let result = await this.authenticationModel.login(username, password);
            
            if (result) {
                data = { username };
                
                // Create Session and JWT
                return res.render(`${absPath.views}/userArea`, { data, errors } )
                
            } else {
                
                data = { username };
                errors.push("Incorrect Username / Password Combination");

                res.render(`${absPath.views}/login`, { data, errors } );
            }

        } catch(error) {
            
            res.status(500).send("Status 500: An error occured");
        }     
    } // End handleLogin Method
    
    
    logout = (req, res) => {
        
        return res.render(`${absPath/views}/login`);
   
    } // End logout

    
    // Registration Methods ------------------------------------------------------------

    register = async (req, res) => {

        let data = [];
        let errors = [];

        return res.render(`${absPath.views}/register`, { data, errors });
    }
    
    handleRegistration = async (req, res) => {
        
        try {
            const { username, password, password_confirm } = req.body;
            let errors = []
                
            let isUserRegistered = await this.authenticationModel.isRegistered(username);
            
            if (isUserRegistered) {
                const data = { username };
                errors.push("This username already exists. Please choose another username.");
                
                return res.render(`${absPath.views}/register`, { data, errors });
            }

            // Set the Rules for the Form Input Here
            this.validation.setRule(['User Name', 'username', username, ['required', 'alpha_numeric','min_length[8]', 'max_length[20]' ]]);
            this.validation.setRule(['Passsword', 'password', password, ['min_length[8]', 'require_special_chars']]);
            this.validation.setRule(['Confirm Password', 'password_confirm', password_confirm, [`matches[${password}]`]]);
            
            errors = this.validation.run();
            
            if (errors.length > 0) {
                const data = { username };
                return res.render(`${absPath.views}/register`, { data, errors });

            } else {

                result = await this.authenticationModel.registerUser(username, password);

                if (result) {
                    return res.redirect('/login');

                } else {

                    return res.send('Registration failed. Please try again.');
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