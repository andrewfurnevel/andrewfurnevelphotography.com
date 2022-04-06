'use Strict';

const config = require(`${process.env.PWD}/_config.js`);


class Home {

    constructor() {
        // this.index();

    }
    
    async index(req, res) {
        
        console.log("Home page:");

        res.render(`${config.absPath.views}/index`);
    }

}

// const home = new Home();
// index = Home.index();
module.exports = { Home }
