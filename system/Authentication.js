'use struct';

// Imports
import express from 'express';
// import bcrypt from 'bcrypt';
// import absPath from '../../_config.js';
// import UserModel from '../models/UserModel.js';
// import Validation from '../../system/Validation.js';
// import Authentication from '../../system/Authentication.js';

class Authentication {
    constructor() {
        this.msg = [];

        // this.validation = new Validation();
        // this.authentication = new Authentication();
        // this.userModel = new UserModel();
    }

    test() {
        console.log("Testing Worked!!!");
    }

    // async test() {
    //     then(console.log("Test Worked!"));

    // }

    async register(res, req) {

    }

    async login() {

    }

    async Logout() {

    }

    async forgotPassword() {

    }

    async changePassword() {

    }


}

export default Authentication;

