'use Strict';

import absPath from '../../_config.js';

class UserArea {

    constructor() {

    }
    
    async index(req, res) {

        // console.log("You are now in the User Area");

        res.render(`${absPath.views}/userArea.ejs`);
    }

}

export default UserArea;