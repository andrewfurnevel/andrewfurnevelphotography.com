'use strict';

import Cookie from '../system/Cookie.js';

class Roles {

    constructor() {

    }
    
    static verifyRole(role = false) {

        // The middleware is receiving the argument but the access-token expiring is not working.
        let verifyRole;

        return (req, res, next) => {
            console.log("The role is: " + role);
            // return next();

            console.log(Cookie.getCookie())

            const accessToken = req.cookies['access-token'];

            Cookie.setCookie(accessToken);

            console.log("Inside verifyRole Class: " + accessToken);
            
            if (role === role) { 
                console.log("");
                console.log("The Role was verified");
                return next(); }
        }
    }
}

export default Roles;
