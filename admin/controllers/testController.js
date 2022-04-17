'use Strict';

const config = require(`${process.env.PWD}/_config.js`);
const TestModel = require(`${config.absPath.adminModels}/TestModel.js`);


class Test { 

    constructor() {

    }

    test = async (req, res) => {

        // console.log('Test Controller Index');
        // console.losg(data.rows);
        res.render(`${config.absPath.adminViews}/test-form`);
    }

}




module.exports = { Test };



