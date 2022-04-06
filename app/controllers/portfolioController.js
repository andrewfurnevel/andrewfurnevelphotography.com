'use Strict';

const config = require(`${process.env.PWD}/_config.js`);


class Portfolio {

    constructor() {

    }
    
    async index(req, res) {

        console.log("Portfolio page from the Home Class controller:");

        res.render(`${config.absPath.views}/portfolio`);
    }

}

module.exports = { Portfolio }
