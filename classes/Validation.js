'use strict';

class Validation {
    constructor(data) {
        // console.log('Validation Class');
        
        // Validation Rules
        this.length;
        this.email;
        this.match;
        this.containsChars;
        this.validationErrors;
        this.rules = [];
    }

    validate(formObj,valRules) {
        console.log(formObj, valRules);
        for (const input in formObj) {
            console.log(`${input} : ${formObj[input]}`);
            for (const rule in valRules) {
                console.log(`${rule} : ${valRules[rule]}`)
            }
        }

    }

    setRules(rules) {
        this.rules.push(rules)
        // console.table(rules);
    }

    showRules() {
        // console.table(this.rules);
    }

    run() {
        console.table(this.rules);
        
        console.log(this.rules[0][2][0]);
        // let theString = 'testRun';
        let theString = this.rules[0][2][0];

        // console.log(theString);

        // NOTE: I'm using eval() which is considered a bad idea and
        // should be replaced with a safe alternative!!! But it works!!!!!
        const validationMethod = String(theString);

        eval(`this.${validationMethod}()`);
 
    }

    testRun() {
        console.log('Test Run Ran!');
    }

    required(val) {
        if (!val) {
            validationErrors.push = '(Required Entry';
            console.log(validationErrors);
        }

    }
    matches(val, match) {
        if (val_a !== val_b) {
            validationErrors.push('Entries Do Not Match!')
        }
    }
    regex_match(val, match) {
        if (val) {
            validationErrors.push();
        }
    }

    differs(val_a, val_b) {}

    is_unique(val) {
        if (!val) {
            validationErrors.push();
        }
    }

    minLength(val, min) {
        if (val.length < min) {
            validationErrors.push(`Input Must be A Minimum of ${min} Characters`); 
        }
    }
    maxLength(val, max) {
        if (val.length > max) {
            validationErrors.push('Input Exceeds the Maximun Length!');
        }
    }

    exact_length(val, len) {
        if (val.length !== len) {
            validationErrors.push();
        }
    }

    greater_than(val) {
        if (val) {
            validationErrors.push();
        }
    }
    great_than_equal_to(val) {
        if (val) {
            validationErrors.push();
        }
    }

    less_than(val) {
        if (val) {
            validationErrors.push();
        }
    }

    less_than_equal_to(val) {
        if (val) {
            validationErrors.push();
        }
    }

    in_list(val, arr){
        if (val) {
            validationErrors.push();
        }
    }

    alpha(val){
        if (val) {
            validationErrors.push();
        }
    }

    alpha_numeric(val){
        if (val) {
            validationErrors.push();
        }
    }

    alpha_numeric_spaces(val) {
        if (val) {
            validationErrors.push();
        }
    }

    alpha_dash(val){
        if (val) {
            validationErrors.push();
        }
    }

    numeric(val){
        if (val) {
            validationErrors.push();
        }
    }

    integer(val){
        if (val) {
            validationErrors.push();
        }
    }

    decimal(val){
        if (val) {
            validationErrors.push();
        }
    }

    is_natural(val){
        if (val) {
            validationErrors.push();
        }
    }

    is_natural_no_zero(val){
        if (val) {
            validationErrors.push();
        }
    }

    valid_url(val){
        if (val) {
            validationErrors.push();
        }
    }

    valid_email(val){
        if (val) {
            validationErrors.push();
        }
    }

    valid_emails(val){
        if (val) {
            validationErrors.push();
        }
    }

    valid_ip(val){
        if (val) {
            validationErrors.push();
        }
    }

    valid_base64(val){
        if (val) {
            validationErrors.push();
        }
    }

} // End Class

// const val = new Validation;

module.exports = { Validation }