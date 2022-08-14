'use Strict';

const config = require(`${process.env.APP_ROOT}/_config.js`);


class About {

    constructor() {

    }
    
    async index(req, res) {

        console.log("About page from the Home Class controller:");

        res.render(`${config.absPath.views}/about`);
    }

}

module.exports = { About }