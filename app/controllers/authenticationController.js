'use strict';

// Imports
// import jwt from 'jsonwebtoken';
import absPath from '../../_config.js';

import Controller from '../../system/Controller.js';
import AuthenticationModel from '../models/AuthenticationModel.js';
import Validation from '../../system/Validation.js';
// import Message from '../../system/Message.js';
import UserModel from '../models/UserModel.js';

import JWTHelper from '../../system_helpers/JWTHelper.js';


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
            
            if (result !== false) {
                // Login was successful

                console.log(result);

                data = { username };
                
                // Create Session and JWT
                const payload = {"username" : username };

                // Issue Access & Refresh Tokens
                const accessToken = JWTHelper.issueAccessToken(payload, process.env.ACCESS_TOKEN_SECRET,'30s');

                const refreshToken = JWTHelper.issueRefreshToken(payload, process.env.REFRESH_TOKEN_SECRET, '1d');

                // console.log(accessToken);
                // console.log(refreshToken);

                // Should probably rename the accessToken to something more ambiguous later.
                res.cookie('access-token', accessToken, {
                    httpOnly: true,
                });
            

                // Store Refresh Token in JWT Table in database.
                this.authenticationModel.setRefeshToken(refreshToken);

                res.redirect(`/userarea`);
                
            } else {
                
                data = { username };
                errors.push("Incorrect Username / Password Combination");

                return res.render(`${absPath.views}/login`, { data, errors } );
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
 
} // End Class

export default Authentication;