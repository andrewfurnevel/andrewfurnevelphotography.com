'use Strict';

import absPath from '../../_config.js';

export default class About {

    constructor() {

    }
    
    async index(req, res) {

        console.log("About page from the Home Class controller:");

        res.render(`${absPath.views}/about`);
    }

}