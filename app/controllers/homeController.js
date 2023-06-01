'use Strict';

// Imports
import absPath from '../../_config.js';


export default class Home {

    constructor() {
    }
    
    async index(req, res) {

        // console.log("Home page from the Home Class controller:");

        // res.render('../app/views/index');
        res.render(`${absPath.views}/index`);

    }

}
