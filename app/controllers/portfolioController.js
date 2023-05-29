'use Strict';

// Imports
// const config = require(`${process.env.APP_ROOT}/_config.js`);

export default class Portfolio {

    constructor() {

    }
    
    async index(req, res) {

        console.log("Portfolio page from the Home Class controller:");

        // res.render(`${config.absPath.views}/portfolio`);
    }

}

// module.exports = { Portfolio }
