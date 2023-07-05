'use strict';

import bcrypt from 'bcrypt';

class BcryptHelper {

    constructor() {

    }

    // static test(password, hashedPass) {
    //     console.log(`Password: ${password} Hashed Password: ${hashedPass}`);
    //     // return;
    // }
    
    static hashPassword(password) {

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        console.log(password);
        console.log(hashedPassword);
        
        return hashedPassword;
    }

    static compareSyncPassword(password, hashedPass) {

        const passwordsMatch = bcrypt.compareSync(password, storedHashedPassword);
        
        if (passwordsMatch) {
            //   res.send('Login successful!');
            console.log('Login successful!');
        } else {
            //   res.send('Invalid credentials.');
            console.log('Invalid credentials.');
        }
    }


    
    static comparePassword(password, hashedPass) {
        
        bcrypt.compare(password, hashedPass, (err, result) => {

            if (result) {
                // Passwords match
                // console.log(result); // result returns true or false.
                console.log("Passwords match");
                return result;
            } else {
                // Passwords do not match
                console.log("Passwords do not match");
                return result;
            }
        });
        
        const answer = bcrypt.compare(password, hashedPass, (err, result));

        console.log(answer);
    }

    
} // End class BcryptHelper

export default BcryptHelper;

// bcrypt.compare(password, hashedPass, (err, result) => {

//     if (result) {
//         // Passwords match
//         // console.log(result); // result returns true or false.
//         console.log("Passwords match");
//         return result;
//     } else {
//         // Passwords do not match
//         console.log("Passwords do not match");
//         return result;
//     }
// });