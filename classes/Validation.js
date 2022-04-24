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

    }

    testRun() {
        console.log('Test Run Ran!');
    }

    required(val) {
        if (!val) {
            errors.push = '(Required Entry';
            console.log(errors);
        }

    }
    matches(val, match) {
        if (val_a !== val_b) {
            error.push('Entries Do Not Match!')
        }
    }
    regex_match(val, match) {
        if (val) {
            error.push();
        }
    }

    differs(val_a, val_b) {}

    is_unique(val) {
        if (!val) {
            error.push();
        }
    }

    minLength(val, min) {
        if (val.length < min) {
            error.push(`Input Must be A Minimum of ${min} Characters`); 
        }
    }
    maxLength(val, max) {
        if (val.length > max) {
            error.push('Input Exceeds the Maximun Length!');
        }
    }

    exact_length(val, len) {
        if (val.length !== len) {
            error.push();
        }
    }

    greater_than(val) {
        if (val) {
            error.push();
        }
    }
    great_than_equal_to(val) {
        if (val) {
            error.push();
        }
    }

    less_than(val) {
        if (val) {
            error.push();
        }
    }

    less_than_equal_to(val) {
        if (val) {
            error.push();
        }
    }

    in_list(val, arr){
        if (val) {
            error.push();
        }
    }

    alpha(val){
        if (val) {
            error.push();
        }
    }

    alpha_numeric(val){
        if (val) {
            error.push();
        }
    }

    alpha_numeric_spaces(val) {
        if (val) {
            error.push();
        }
    }

    alpha_dash(val){
        if (val) {
            error.push();
        }
    }

    numeric(val){
        if (val) {
            error.push();
        }
    }

    integer(val){
        if (val) {
            error.push();
        }
    }

    decimal(val){
        if (val) {
            error.push();
        }
    }

    is_natural(val){
        if (val) {
            error.push();
        }
    }

    is_natural_no_zero(val){
        if (val) {
            error.push();
        }
    }

    valid_url(val){
        if (val) {
            error.push();
        }
    }

    valid_email(val){
        if (val) {
            error.push();
        }
    }

    valid_emails(val){
        if (val) {
            error.push();
        }
    }

    valid_ip(val){
        if (val) {
            error.push();
        }
    }

    valid_base64(val){
        if (val) {
            error.push();
        }
    }

} // End Class

// const val = new Validation;

module.exports = { Validation }