'use Strict';

// Imports
const config = require(`${process.env.PWD}/_config.js`);


class Home {

    constructor() {

    }
    
    async index(req, res) {

        console.log("Home page from the Home Class controller:");

        res.render(`${config.absPath.views}/index`);
    }

}

module.exports = { Home }
