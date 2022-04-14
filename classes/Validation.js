'use strict';

class Validation {
    constructor(data) {
        console.log('Validation Class');
        
        // Validation Rules
        this.length;
        this.email;
        this.match;
        this.containsChars;

    

    }

    validate(obj,rules) {
        console.log(obj,rules);
    }
    
    isLength() {

    }

    contains() {

    }

    matches() {}

    isEmail() {}

    isValid() {}

    isEmpty() {}





} // End Class

const val = new Validation;

module.exports = { Validation, val }