'use strict';

class Validation {
    constructor(data) {
        // console.log('Validation Class');
        
        // Validation Rules
        this.length;
        this.email;
        this.match;
        this.containsChars;

    

    }

    validate(formObj,rules) {
        console.log(formObj,rules);
    }

    required() {
        err='Required Entry';
    }
    matches() {}
    regex_match() {}
    differs() {}
    is_unique() {}
    minLength(val) {}
    maxLength() {val}
    exact_length(val) {}
    greater_than(val) {}
    great_than_equal_to(val) {}
    less_than(val) {}
    less_than_equal_to(val) {}
    in_list(){}
    alpha(){}
    alpha_numeric(){}
    alpha_numeric_spaces() {}
    alpha_dash(){}
    numeric(){}
    integer(){}
    decimal(){}
    is_natural(){}
    is_natural_no_zero(){}
    valid_url(){}
    valid_email(){}
    valid_emails(){}
    valid_ip(){}
    valid_base64(){}

} // End Class

const val = new Validation;

module.exports = { Validation, val }