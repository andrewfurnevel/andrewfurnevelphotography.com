'use strict';
import jwt from 'jsonwebtoken';
class JWTHelper {

    constructor() {
    }

    static issueAccessToken = (payload, secret, duration) => {
        return jwt.sign(payload, secret, {expiresIn: duration});
    }
    
    static issueRefreshToken = (payload, secret, duration) => {
        return jwt.sign(payload, secret, {expiresIn: duration});
    }

    static verifyToken = (req, res, next) => {
        const accessToken = req.cookies['access-token']

        if(!accessToken) {
            console.log("You're Not Allowed");

        } else {

            jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
                if(err) {
                    console.log("Expired or Missing Token");
                    // Create 403 Access Prohibited Page.

                } else {
                    console.log(decoded);
                    console.log(decoded.username);
                    next();
                }
            });
        }
    }

    static issueNewAccessToken() {

    }

    saveRefreshToken = () => {

    }

    invalidateAccessToken = () => {

    }

    invalidateReshToken = () => {

    }

} // JWTHelper

export default JWTHelper;

