'use Strict';

// Imports
import absPath from '../../_config.js';

export default class Contact {

    constructor() {

    }
    
    async index(req, res) {

        console.log("Contact page from the Home Class controller:");

        res.render(`${absPath.views}/contact`);
    }

}