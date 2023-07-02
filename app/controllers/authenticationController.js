'use strict';



// Imports
// import express from 'express';
import absPath from '../../_config.js';
import Controller from '../../system/Controller.js';
import AuthenticationModel from '../models/AuthenticationModel.js';
import Validation from '../../system/Validation.js';
import Message from '../../system/Message.js';
import UserModel from "../models/UserModel.js";

class Authentication extends Controller {
    constructor() { 
        super();

        this.authenticationModel = new AuthenticationModel;
        this.UserModel = new UserModel;
        this.rules = [];
        this.messages = [];

    }
    
    // Login Methods -------------------------------------------------------------------
    
    login = (req, res) => {

        let data = [];

        res.render(`${absPath.views}/login`, { data } );    
    }    
    
    handleLogin = async (req, res) => {

        try {
            const { username, password } = req.body;
            let result = await this.authenticationModel.login(username, password);
            

            // console.log(result);
            let data = [];

            if (result === true ) {

                data = username;

                // Create Session and JWT
                res.render(`${absPath.views}/userArea`, { data } )

            } else {

                data.username = username;
                data.errors = 'Incorrect Username / Password Combination';

                console.log(data); // The failed username and password combination.

                res.render(`${absPath.views}/login`, { data } );
            }

        } catch(error) {

            res.status(500).send('Status 500: An error occured');

        }     
    }
    
    
    logout = (req, res) => {
        res.render(`${absPath/views}/login`);
   
    }

    
    
    // Registration Methods ------------------------------------------------------------

    register = (req, res) => {
        let data = [];
        res.render(`${absPath.views}/register`, { data });
    }
    
    handleRegistration = async (req, res) => {

        // try {

        // } catch {
        //     console.log(error(error());
        //     res.status(500).send('An error occured');
        // }

        let data = await this.authenticationModel.isRegistered(req.body.username);
        // console.log(data);
        
        if (data === req.body.username) {
            console.log("lskjdhflkjahsldkjfhla"); 
            data.errors = Message.errors;
            coneole.log(data.errors);
            res.render(`${absPath.views}register`, { data });
            
            // this.messages.push("This Username is already registered");
            // console.log(this.messages); // Works!!!
            
        } else {
            
            const validation  = new Validation();
            
            // Set the Rules for the Form Input Here
            validation.setRule(['User Name', 'username', req.body.username, ['special_chars','minLength[8]']]);
            validation.setRule(['Passsword', 'password', req.body.password, ['natural_number_no_zeros']]);
            
            // Run the Input Validation
            this.validationErrors = validation.run();
            // console.log (this.validationErrors);
            
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