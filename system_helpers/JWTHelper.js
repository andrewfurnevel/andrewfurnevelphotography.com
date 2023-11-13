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

// Issue access and REfresh Tokens -----------------------------------

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

    // This will handle the different stages of checking and refreshing access tokens.

    static restrictedAccess(req, res, next) {
        // console.log("Method: restrictedAccess");
        const accessToken = req.cookies['access-token'];

        // If there is no access token, redirect to the lgin page.
        if (accessToken == undefined) {
            console.log("No Access Token was found. Re-directing to login page");
            res.redirect('/login');
        }
        
    
        const verifiedAccessToken = JWTHelper.verifyAccessToken(accessToken);
        
        if(verifiedAccessToken) {
            next(); // Access Token verified. Allow access to restricted content.
        } else {
        
            // console.log(verifiedAccessToken);
            const refreshToken = req.cookies['refresh-token'];

            // If no 
            if (refreshToken == undefined) {
                // console.log("No Refresh Token was found. Re-directing to login page.");
                res.redirect('/login');
            }
            
            const verifiedRefreshToken = JWTHelper.verifyRefreshToken(refreshToken);
            
            if (verifiedRefreshToken) {
                console.log("Method: restrictedAccess");
                // console.log("Refresh Token Verified. Issue new Access Token");
                // console.log(verifiedRefreshToken);
                // console.log(verifiedRefreshToken.username);

                const payload = {"username" : verifiedRefreshToken.username };

                JWTHelper.issueAccessToken(res, payload);
                // console.log(req.url)
                res.redirect(req.url);

            } else {

                console.log("Refresh Token Verification Failed. Redirecting to login page");
                res.redirect('/login');
            }
        }
    }

    // -----------------------------------------------------------------------
    
    static verifyAccessToken(accessToken) {
        console.log("Method: verifyAccessToken");
        let verifyAccessToken = false;

        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            // console.log("Inside jwt.verify - Access Token");
            // console.log(err);

            if (err) { 
                verifyAccessToken = false;
                console.log("accessToken err was thrown!");
            }
            
            verifyAccessToken = decoded;    
        });

        return verifyAccessToken;
            
    }
            // Create 403 Access Prohibited Page.
  



    // Verify Refresh Token ---------------------------------------------------

    static verifyRefreshToken(refreshToken) {
         
        // let verifyRefreshToken = false;
        let decodedRefreshToken = false;
        console.log('Method: verifyRefreshToken');
        // return true;
        // If there is a valid refresh token, issue another access token.

        // Get the refresh-token cookie
        // const refreshToken = req.cookies['refresh-token']; 

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

