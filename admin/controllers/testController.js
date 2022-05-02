'use Strict';

const config = require(`${process.env.PWD}/_config.js`);
const TestModel = require(`${config.absPath.adminModels}/TestModel.js`);
const { Validation } = require(`${config.absPath.classes}/Validation.js`);

class Test { 

    constructor() {
        // this.setRule = [];
        this.validationErrors = [];
    }

    test = async (req, res) => {

        const validation = new Validation();

        // const setRule = [];

        // Set the Validation rules to the rules array in Validation Class
        validation.setRule(['User Name', 'username', req.body.username, ['is_natural_no_zero']]);
        // validation.setRule(['Passsword', 'password', req.body.password, ['required']]);
        // validation.setRule(['Email', 'email', req.body.email, ['required', 'valid_email']]);
        // validation.setRule(['Telephone', 'telephone', req.body.telephone, ['required', 'numeric']]);
        // validation.setRule(['IP Address', 'ip_address', req.body.ip_address, ['required', 'valid_ip']]);

        this.validationErrors = validation.run();

        // Returned Errors
        console.log (this.validationErrors);

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

