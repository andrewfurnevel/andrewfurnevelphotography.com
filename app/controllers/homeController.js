'use Strict';

// Imports
// const config = require(`${process.env.APP_ROOT}/_config.js`);


export default class Home {

    constructor() {
        console.log('Made it this far');
        // this.index();
    }
    
    async index(req, res) {

        console.log("Home page from the Home Class controller:");

        res.render('../app/views/index');
        // res.render(`${config.absPath.views}/index`);

    }

}

// module.exports = { Home }
