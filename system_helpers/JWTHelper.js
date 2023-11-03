'use strict';
import jwt from 'jsonwebtoken';
class JWTHelper {

    constructor() {
    }

    // static issueTokens = (res, payload) => {

    //     console.log("Issuing tokens");
    //     // console.log(payload);
    //     this.issueAccessToken(res, payload);
    //     this.issueRefreshToken(res, payload);
        
    //     return;
    // } 

    static issueAccessToken(res, payload) {

        console.log("Method: issueAccessToken");

        const signedAccessToken = jwt.sign(
            payload,
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '30s'}  
        );

        console.log(`Access Token ${signedAccessToken}`);
        
        res.cookie('access-token', signedAccessToken, {
            httpOnly: true,
        });
        
        return;
    }
    
    static issueRefreshToken = (res, payload) => {
        
        console.log("Method: issueRefreshToken");
        
        const signedRefreshToken = jwt.sign(
            payload,
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
            );
            console.log(`Refresh Token ${signedRefreshToken}`);

        res.cookie('refresh-token', signedRefreshToken, {
            httpOnly: true,
        });

        return;

    }


//--------------------------------------------------------------------

    static verifyToken = (req, res, next) => {
        const accessToken = req.cookies['access-token'];

        if(!accessToken) {
            // If there is no token, deny access.
            console.log("Access Denied");
            return;

        }

        // There is a token, verify it!
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
           
            // If token has expired, check to see if there is a valid refresh token.
            if(err) {
                const refreshToken = req.cookies['refresh-token'];
                console.log("Expired or Missing Access Token");
                // console.log(refreshToken);

                jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
                    if(refreshToken) {
                        console.log('Refresh Token is Valid');
                        // Issue a new access token and redirect to user area.

                        next();
                    }
                })
                // If token expired, verify refreshToken;
                // Create 403 Access Prohibited Page.
                // res.redirect('/login');

            } else {
                // console.log(decoded);
                // console.log(decoded.username);
                next();
            }
        });
        
    }

    verifyRefreshToken() {
        // If there is a valid refresh token, issue another access token.
    }

    static deleteTokens() {

    }

    // Store Refresh Token in JWT Table in database.
    // this.authenticationModel.setRefeshToken(refreshToken);

    static deleteTokens = (req, res) => {
        res.clearCookie('access-token');
        res.clearCookie('refresh-token');
    }
    
    saveRefreshToken = () => {

    }

    invalidateAccessToken = () => {

    }

    invalidateReshToken = () => {

    }

} // JWTHelper

export default JWTHelper;

