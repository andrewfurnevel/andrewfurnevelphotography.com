'use strict';

class Validation {
    constructor(data) { 

        this.validationMethod;
        this.validationErrors= [];

        this.rules = [];
        this.imput;
        this.currentRule;
    }

    // validate(formObj,valRules) {
    //     console.log(formObj, valRules);
    //     for (const input in formObj) {
    //         console.log(`${input} : ${formObj[input]}`);
    //         for (const rule in valRules) {
    //             console.log(`${rule} : ${valRules[rule]}`)
    //         }
    //     }
    // }

    // Change this to setRule
    setRules(rules) {
        this.rules.push(rules)
        // console.table(rules);
    }

    showRules() {
        // console.table(this.rules);
    }

    // Need to incorporate thid into the run() method.
    checkForArgs(arg) {
        var regex = /\[/g;
        return regex.test(arg);
    } 
    
    run() {
   
        // try {
        //     console.log(this.rules[3][2].length);
        // }

        // catch {
        //     console.log('Wrong Number Of Parameters!');
        //     console.log('Parameter Format Should Be: [label, name, req.body.name, [rules]]')
        // }

        console.table(this.rules);

        for ( let i = 0; i < this.rules.length; i++ ) {

            // Get User Input from form (req.body)
            this.input = this.rules[i][2]; // No longer used!!!
            
            for ( let j = 0; j < this.rules[i][3].length; j++ ) { 

                // Set currentRule
                this.currentRule = this.rules[i][3][j];
                
                const containsArg = this.checkForArgs(this.currentRule);
                
                // Rule contains additional arguments
                if (containsArg) {

                    // Split string into method and arguments
                    const ruleWithArg = this.currentRule.slice(0, -1).split('[');

                    // Method call with arguments (Example: minLength[5])
                    eval(`this.${ruleWithArg[0]}
                        (
                            '${this.rules[i][0]}',
                            '${this.rules[i][1]}',
                            '${this.rules[i][2]}',
                            '${ruleWithArg[1]}'
                        )`);
                    
                    console.log('');            
                // Rule has no additional arguments   
                }  else {
                    
                     // Method call with no arguments (Example: validEmail)
                    eval(`this.${this.currentRule}
                        (
                            '${this.rules[i][0]}',
                            '${this.rules[i][1]}',
                            '${this.rules[i][2]}'
                        )`);
                }  
                console.log('');            
            } 
        } 
    }

    // Validation Methods -------------------------------------------------------

    required(legend, name, input) {
        if (input == undefined || input == "") {
            this.validationErrors.push(`${legend} Required`);
            console.log(this.validationErrors);
        }

        console.log(`required Method Called`);
        console.log(`Legend: ${legend}, Name: ${name}, Input: ${input}` )

    }
    matches(match, input) {
        if (argA !== argB) {
            this.validationErrors.push('Entries Do Not Match!')
        }
    }
    regex_match(regex, input) {
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} is InValid`);
            console.log(this.validationErrors);
        }
        console.log('regexMatch Method Called');
    }

    minLength(legend, name, input, minLength) {
        if (input.length < minLength) {
            this.validationErrors.push(`${legend} Must be at Least ${minLength} Characters`); 
            console.log(this.validationErrors);
        }
        console.log(`minLength Method Called`);
        console.log(`Legend: ${legend}, Name: ${name}, Input: ${input}, Arg: ${minLength}` )
    }

    maxLength(legend, name, input, maxLength) {
        if (input.length > maxLength) {
            this.validationErrors.push(`${legend} Must be at Least ${maxLength} Characters`); 
            console.log(this.validationErrors);
            }
            console.log(`maxLength Method Called`);
            console.log(`Legend: ${legend}, Name: ${name}, Input: ${input}` )
        }
        
    valid_email(legend, name, input){
        const regex = /[a-zA-Z0-9_+.-]+@{a-zA-z0-9-]+\.[a-zA-Z0-9-.]+/;
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} is Not a Valid Email Address!`); 
            console.log(this.validationErrors);
        }
        console.log('validEmail Method Called');
        console.log(`Legend: ${legend}, Name: ${name}, Input: ${input}` )
    }
    
    alpha(legend, name, input){
        const regex = /[a-zA-Z]/;
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Can Only Contain Alpha Characters`);
            console.log(this.validationErrors);
        }
        console.log('alpha Method Called');
        console.log(`Legend: ${legend}, Name: ${name}, Input: ${input}` )
    }

    numeric(legend, name, input){
        const regex =/[0-9]/;
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Can Only Contain Numeric Characters`);
            console.log(this.validationErrors);
        }
        console.log('numeric Method Called');
        console.log(`Legend: ${legend}, Name: ${name}, Input: ${input}` )
    }
    // ------------------------------------------------------------------------

    
    valid_emails(inputArr){
        // Need to reate loop to loop through emails and validation each one.
        const regex = /[a-zA-Z0-9_+.-]+@{a-zA-z0-9-]+\.[a-zA-Z0-9-.]+/;
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} is Not a Valid Email Address!`); 
            console.log(this.validationErrors);
        }
        console.log('validEmails Method Called');
    }
    
    allowableChars(input, chars) {
        const regex = /[a-zA-Z0-9.!@#$%^&*(){}\[\]]+/;
        if (!regex,test(input)) {
            this.validationErrors.push( );
        }
        console.log('allowableChars Method Called');

    }


    alpha_numeric(input){
        const regex = /\w/;
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Can Only Contain Alpha Numeric Characters`);
        }   console.log(this.validationErrors);
        console.log('alphaNumeric Method Called');
    }

    alpha_numeric_spaces(input) {
        const regex = /[a-zA-A0-9\s]+/;
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend}: Only Alph Numberic Characters and Spaces are Allowed`);
            console.log(validationErrors);
        }
        console.log('alphaNUmericSpaces Method Called');
    }
    
    alpha_dash(input){
        const regex = /[a-zA-Z0-9-]+/;
        if (!regex.test(input)) {
            this.validationErrors.push(`${Legend}: Only Alpha Numeric Characters and Dashes Are Allowed`);
            console.log(validationErrors);
        }
        console.log('alphaDash Method Called');
    }
    
    
    alpha_numeric_dashes_underscores(input) {
        const regex = /[z-aA-Z0-9-_]+/;
        if (!regex,test(input)) {
            this.validationErrors.push();
            console.log(validationErrors);
        }

    }

    integer(input){
        const regex = /[0-9.]+/;
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Must Be An Integer`);
            console.log(validationErrors);
        }
        console.log('integer Method Called');
    }
    
    decimal(input){
        const regex = /[0-9.]/;
        if (input) {
            this.validationErrors.push();
        }
        console.log('decimal Method Called');
    }
    
    is_natural(input){
        const regex = / /;
        if (input) {
            this.validationErrors.push();
        }
        console.log('isNatural Method Called');
    }

    is_natural_no_zero(input){
        const regex = / /;
        if (input) {
            this.validationErrors.push();
        }
        console.log('isNaturalNoZero Method Called');
    }
    
    valid_url(input){ 
        const regex = / /;
        if (input) {
            this.validationErrors.push();
        }
        console.log('validURL Method Called');
    }

    differs(input, match) {
        const regex = / /;
    }

    unique(input) { 
        if (!input) {
            this.validationErrors.push();
        }
        console.log('isUnique Method Called');
    }


    exact_length(input, len) {
        if (input.length !== len) {
            this.validationErrors.push();
            console.log(validationErrors);
        }
        console.log('exactLength Method Called');
    }

    greater_than(input, arg) {
        const regex = / /;
        if (input) {
            this.validationErrors.push();
            console.log(validationErrors);
        }
        console.log('greaterThan Method Called');
    }

    great_than_equal_to(input, arg) {
        const regex = / /;
        if (input) {
            this.validationErrors.push();
        }
        console.log('greaThanEqualTo Method Called');
    }

    less_than(input, arg) {
        const regex = / /;
        if (input) {
            this.validationErrors.push();
        }
        console.log('lessThan Method Called');
    }

    less_than_equal_to(input, arg) {
        const regex = / /;
        if (input) {
            this.validationErrors.push();
        }
        console.log('lessThanEqualTo Method Called');
    }

    in_list(input, arr){
        const regex = / /;
        if (input) {
            this.validationErrors.push();
        }
        console.log('inList Method Called');
    }

    valid_ip(legend, name, input){
        const regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if (!regex.test(input)) {
            this.validationErrors.push(`${legned} is Not a Valid IP Address`);
            consoleloh(validationErrors);
        }
        console.log('valid_ip Method Called');
        console.log(`Legend: ${legend}, Name: ${name}, Input: ${input}` )
    }

    valid_base64(input){
        const regex = /^([A-Za-z0-9+/]{4})*/;
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} is Not Valid Base 64`);
            console.log(validationErrors);
        }
        console.log('validBase64 Method Called');
    }


} // End Class

module.exports = { Validation }