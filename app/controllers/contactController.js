'use Strict';

// const config = require(`${process.env.APP_ROOT}/_config.js`);

export default class Contact {

    constructor() {

    }
    
    async index(req, res) {

        console.log("Contact page from the Home Class controller:");

        res.render(`${config.absPath.views}/contact`);
    }

}

// module.exports = { Contact }