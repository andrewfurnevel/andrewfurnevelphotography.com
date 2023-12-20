'use strict';
import jwt from 'jsonwebtoken';
class JWTHelper {

    // Issue Access Token
    // Issue Refresh Token
    // Check if Access Token exists
    // Verify Access Token
    // Verify Refesh Token
    // Delete Tokens from the client browser
    // Save refresh token to database
    // Check refresh token blacklist for expired refrewh tokens

    constructor() {
    }

// Issue access and Refresh Tokens -----------------------------------

    static issueAccessToken(res, payload) {

        // console.log("Method: issueAccessToken");

        const signedAccessToken = jwt.sign(
            payload,
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '30s'}  
        );

        // console.log(`Access Token ${signedAccessToken}`);
        
        res.cookie('access-token', signedAccessToken, {
            httpOnly: true,
        });
        
        return;
    }
    
    static issueRefreshToken = (res, payload) => {
        
        // console.log("Method: issueRefreshToken");
        
        const signedRefreshToken = jwt.sign(
            payload,
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
            );

            // console.log(`Refresh Token ${signedRefreshToken}`);

        res.cookie('refresh-token', signedRefreshToken, {
            httpOnly: true,
        });

        return;

    }

//--------------------------------------------------------------------
    // Working - Routes accept multiple chained middleware methods.
    static verifyRole(role = false) {

        // The middleware is receiving the argument but the access-token expiring is not working.
        let verifyRole;

        return (req, res, next) => {
            console.log("The role is: " + role);
            // return next();
            const accessToken = req.cookies['access-token'];
            
            // jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
                
            //     console.log("Decoded in verifyRole Method");
            //     console.log(decoded.role);
                
            //     if (decoded.role != role) {
            //         verifyRole = false;
            //         console.log("Access Denied");
            //         // return;
            //     }

            //     verifyRole;

            // });
            
            // console.log("verifyRole: " + verifyRole);

            // if (!verifyRole) {
            //     return res.redirect('/login');
            // }

            if (role === false || "A1") { return next(); }
        }
    }

    // This will handle the different stages of checking and refreshing access tokens.

    static restrictedAccess(req, res, next) {
        // console.log("Method: restrictedAccess");
        const accessToken = req.cookies['access-token'];

        // If there is no access token, redirect to the lgin page.
        if (!accessToken) {
            console.log("No Access Token was found. Re-directing to login page");
            return res.redirect('/login');
        }
        
        const verifiedAccessToken = JWTHelper.verifyAccessToken(accessToken);
        
        if(verifiedAccessToken) {
            // Access Token verified. Allow access to restricted content.
            return next(); 

        } else {
            
            const refreshToken = req.cookies['refresh-token'];
            // console.log(verifiedAccessToken);

            if (!refreshToken) {
                // console.log("No Refresh Token was found. Re-directing to login page.");
                return res.redirect('/login');
            }
            
            const verifiedRefreshToken = JWTHelper.verifyRefreshToken(refreshToken);
            
            if (verifiedRefreshToken) {
                // console.log("Method: restrictedAccess");
                // console.log("Refresh Token Verified. Issue new Access Token");
                // console.log(verifiedRefreshToken);
                // console.log(verifiedRefreshToken.username);

                const payload = { "username" : verifiedRefreshToken.username, "role" : "A1" };

                JWTHelper.issueAccessToken(res, payload);
                // console.log(req.url)
                return res.redirect(req.url);

            } else {

                console.log("Refresh Token Verification Failed. Redirecting to login page");
                return res.redirect('/login');
            }
        }
    }  // End restrictedAccess Method


    // -----------------------------------------------------------------------
    
    static verifyAccessToken(accessToken) {
        // console.log("Method: verifyAccessToken");
        let verifyAccessToken = false;

        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            // console.log("Inside jwt.verify - Access Token");
                        
            if (err) { 
                console.log("Error: " + err);
                verifyAccessToken = false;
                console.log("accessToken err was thrown!");
            }

            // Test
            // console.log("verifyAccessToken"); // Temp Test
            // console.log(decoded.username); // Temp test
            // console.log(decoded.role); // Temp test
            // console.log(decoded); // Temp test
            // End Test

            verifyAccessToken = decoded; 

        });

        return verifyAccessToken;
            
    }
            // Create 403 Access Prohibited Page.
  



    // Verify Refresh Token ---------------------------------------------------

    static verifyRefreshToken(refreshToken) {
        // If there is a valid refresh token, issue a new access token.
        // console.log('Method: verifyRefreshToken');
         
        // let verifyRefreshToken = false;
        let decodedRefreshToken = false;

        if(!refreshToken) {
            console.log("Refresh Token is Missing");
            // res.redirect('/login');
            return;
        }
        
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            
            if(err) {
                console.log("refreshToken err was thrown!");
                // res.redirect('/login');

            } else {

                const payload = decoded.username;
                decodedRefreshToken = decoded;
                // console.log("Decoded Refresh Token below");
                // console.log(decodedRefreshToken);
            }
        });
        
        return decodedRefreshToken;   
    } 

    // Store Refresh Token in JWT Table in database.
    // this.authenticationModel.setRefeshToken(refreshToken);

    static deleteTokens = (req, res) => {
        console.log("Delete Token Cookies fro Client Browser");
        res.clearCookie('access-token');
        res.clearCookie('refresh-token');
    }
    
    addRefreshTokenToBlacklist = () => {

    }

} // JWTHelper

export default JWTHelper;

