'use Strict';

const config = require(`${process.env.APP_ROOT}/_config.js`);
const TestModel = require(`${config.absPath.adminModels}/TestModel.js`);
const { Validation } = require(`${config.absPath.system}/Validation.js`);

class Test { 

    constructor() {
        // this.setRule = [];
        this.validationErrors = [];
    }

    async test (req, res) {

        const validation = new Validation();

        // const setRule = [];

        // Set the Validation rules to the rules array in Validation Class
        validation.setRule(['User Name', 'username', req.body.username, ['special_chars']]);
        // validation.setRule(['Passsword', 'password', req.body.password, ['required']]);
        // validation.setRule(['Email', 'email', req.body.email, ['required', 'valid_email']]);
        // validation.setRule(['Telephone', 'telephone', req.body.telephone, ['required', 'numeric']]);
        // validation.setRule(['IP Address', 'ip_address', req.body.ip_address, ['required', 'valid_ip']]);

        // This starts the validation process and returns an errors array if any are found.
        this.validationErrors = validation.run();

        // Returned Errors. Send this to view to shows errors to user.
        console.log (this.validationErrors);

        // console.log(req.body);
        // Send the input request object to the Validation Class for processing
        // validation.validate(req.body, valRules);

        // console.log(req.body.username);
        // console.table(req.body);

        // console.log(data.rows);
        // let data = testModel.validate()
        // .then((data) => {
        //         console.log(data.rows);
        // });

        res.render(`${config.absPath.adminViews}/test-form`, this.validationErrors);
    }

}

module.exports = { Test };


