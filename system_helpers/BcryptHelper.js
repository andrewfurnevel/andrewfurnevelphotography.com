'use strict';

import bcrypt from 'bcrypt';

class BcryptHelper {

    constructor() {

    }
    
    static hashPassword(password) {

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        // console.log(password);
        // console.log(hashedPassword);
        
        return hashedPassword;
    }

    // Sync Method - Compare Stored Hashed Password against Login Form Entry -----------

    static compareSyncPassword(password, hashedPass) {

        const passwordsMatch = bcrypt.compareSync(password, storedHashedPassword);
        
        if (passwordsMatch) {
            console.log('Login successful!');
        } else {
            console.log('Invalid credentials.');
        }
    }

    // Async Method - Compare Stored Hashed Password against Login Form Entry ----------

    static comparePasswords(password, hashedPass) {
        
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hashedPass, (err, authenticatePassword) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(authenticatePassword);
                }
            });
        });
    }
    
} // End class BcryptHelper

export default BcryptHelper;