'use Strict';

const config = require(`${process.env.PWD}/_config.js`);
const TestModel = require(`${config.absPath.adminModels}/TestModel.js`);
const { Validation } = require(`${config.absPath.classes}/Validation.js`);

class Test { 

    constructor() {
        // this.setRules = [];
    }

    test = async (req, res) => {

        const validation = new Validation();

        const setRules = [];

        // Set the Validation rules to the rules array in Validation Class
        validation.setRules(['User Name', 'username', req.body.username, ['required',  'alpha']]);
        validation.setRules(['Passsword', 'password', req.body.password, ['required']]);
        validation.setRules(['Email', 'email', req.body.email, ['required', 'valid_email']]);
        validation.setRules(['Telephone', 'telephone', req.body.telephone, ['required', 'numeric']]);
        validation.setRules(['IP Address', 'ip_address', req.body.ip_address, ['required', 'valid_ip']]);

        validation.run();

        // console.log(req.body);
        // Send the input request object to the Validation Class for processing
        // validation.validate(req.body, valRules);

        // for (const key in req.body) {
        //     console.log(`${key} : ${req.body[key]}`);
        // }

        // const keys = Object.keys(req.body);
        // console.log(keys);

        // console.log(req.body.username);
        // console.table(req.body);

        // console.losg(data.rows);
        // let data = testModel.validate()
        // .then((data) => {
        //         console.log(data.rows);
        // });

        res.render(`${config.absPath.adminViews}/test-form`);
    }

}


module.exports = { Test };

