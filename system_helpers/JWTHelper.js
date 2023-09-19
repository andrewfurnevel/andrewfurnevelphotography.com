'use strict';
import jwt from 'jsonwebtoken';
class JWTHelper {

    constructor() {

    }

    jwtSign = (res, req) => {
        const accesstoken = jwt.sign();
        return 
    }

    verifyToken = (res, req) => {
    
    }

    saveToken = () => {

    }


}

export default JWTHelper;

