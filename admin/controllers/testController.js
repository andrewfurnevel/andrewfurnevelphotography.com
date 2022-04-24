'use Strict';

const config = require(`${process.env.PWD}/_config.js`);
const TestModel = require(`${config.absPath.adminModels}/TestModel.js`);
const { Validation } = require(`${config.absPath.classes}/Validation.js`);

class Test { 

    constructor() {
        // this.setRules = [];
    }

    test = async (req, res) => {

        // console.log('Test Controller Index');

        const validation = new Validation();

        const setRules = [];

        // const valRules = {
        //     "username" : "required, minLength",
        //     "password" : "required, matches"
        // }

        // Set the Validation rules to the rules array in Validation Class
        validation.setRules(['User Name', 'username',['testRun', 'minLength[5]', 'maxLength[25]']]);
        validation.setRules(['Passsword', 'password',['required', 'minLength[8]']]);
        validation.setRules(['Passsword Confermation', 'passwordConf',['required', 'matches[passoerd]']]);
        validation.setRules(['Email', 'email',['required', 'isEmail']]);

        validation.run();

        // console.log(req.body);
        // Send the input request object to the Validation Class for processing
        // validation.validate(req.body, valRules);

        console.log(req.body.username);
        console.table(req.body);

        // console.losg(data.rows);
        // let data = testModel.validate()
        // .then((data) => {
        //         console.log(data.rows);
        // });

        res.render(`${config.absPath.adminViews}/test-form`);
    }

}


module.exports = { Test };

