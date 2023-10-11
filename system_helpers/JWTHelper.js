'use strict';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
class JWTHelper {

    constructor() {
    }

    static issueJWTs(payload) {
        console.log(`issueJWTs Method, ${payload.username}`);
    }

    static jwtSign = (req, res) => {
        const accesstoken = jwt.sign();
        return 
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

    invalidateAccessToken() {

    }

    invalidateReshToken() {

    }

} // JWTHelper

export default JWTHelper;

