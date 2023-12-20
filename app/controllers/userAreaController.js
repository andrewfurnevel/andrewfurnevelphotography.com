'use Strict';

import absPath from '../../_config.js';

class UserArea {

    constructor() {
    }
    
    async index(req, res) {
        console.log();

        res.render(`${absPath.views}/userArea.ejs`);

        // console.log("Access Token");
        // console.log(req.cookies['access-token']);



        // console.log("Refresh Token");
        // console.log(req.cookies['refresh-token']);
    }

}

export default UserArea;