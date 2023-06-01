'use Strict';

// Imports

import absPath from '../../_config.js';

export default class Portfolio {

    constructor() {

    }
    
    async index(req, res) {

        console.log("Portfolio page from the Home Class controller:");

        // res.render(`${config.absPath.views}/portfolio`);
        res.render(`${absPath.views}/portfolio`);
    }

}
