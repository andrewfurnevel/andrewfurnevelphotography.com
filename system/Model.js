// Model.js

'use strict';

// Imports
import DB from './DB.js';
// import bcrypt from 'bcrypt';


class Model {
    
    constructor() {
          
        this.db = new DB();
        this.pool = this.db.pool;

    }

    test() {
        console.log("Hello from Parent Class");
        const test = "Hello";
    }

    // hashPassword(password) {
    //     const salt = bcrypt.genSaltSync(10);
    //     const hashedPassword = bcrypt.hashSync(password, salt);
    //     console.log(hashedPassword);
    //     return hashedPassword;
    // }

    // compareHashedPassword(password, storedHashedPassword) {
    //     const passwordsMatch = bcrypt.compareSync(password, storedHashedPassword);

    //     if (passwordsMatch) {
    //     //   res.send('Login successful!');
    //       console.log('Login successful!');
    //     } else {
    //     //   res.send('Invalid credentials.');
    //       console.log('Invalid credentials.');
    //     }
    // }

} // End Class

export default Model;
