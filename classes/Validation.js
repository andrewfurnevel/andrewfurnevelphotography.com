'use strict';

class Validation {
    constructor(data) { 

        this.validationMethod;
        this.validationErrors;

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


    setRules(rules) {
        this.rules.push(rules)
        // console.table(rules);
    }

    showRules() {
        // console.table(this.rules);
    }

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
            this.input = this.rules[i][2];
            
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
        // if (!val) {
        //     validationErrors.push = '(Required Entry';
        //     console.log(validationErrors);
        // }

        console.log(`required Method Called`);
        console.log(`Legend: ${legend}, Name: ${name}, Input: ${input}` )

    }
    matches(match, input) {
        if (argA !== argB) {
            validationErrors.push('Entries Do Not Match!')
        }
    }
    regex_match(regex, input) {
        if (arg) {
            validationErrors.push();
        }
        console.log('regexMatch Method Called');
    }

    minLength(legend, name, input, min) {
        // if (input.length < min) {
        //     validationErrors.push(`Input Must be A Minimum of ${min} Characters`); 
        // }
        console.log(`minLength Method Called`);
        console.log(`Legend: ${legend}, Name: ${name}, Input: ${input}, Arg: ${min}` )
    }

    maxLength(max, legend, name, input) {
        // if (input.length > max) {
            //     validationErrors.push('Input Exceeds the Maximun Length!');
            // }
            console.log(`maxLength Method Called`);
            console.log(`Legend: ${legend}, Name: ${name}, Input: ${input}` )
        }
        
    valid_email(legend, name, input){
        if (input) {
            //validationErrors.push();
        }
        console.log('validEmail Method Called');
        console.log(`Legend: ${legend}, Name: ${name}, Input: ${input}` )
    }
    
    alpha(legend, name, input){
        if (input) {
            // validationErrors.push();
        }
        console.log('alpha Method Called');
        console.log(`Legend: ${legend}, Name: ${name}, Input: ${input}` )
    }
    // ------------------------------------------------------------------------
    // Require, minLength & maxLength are receiving the right data. Error not yet set.


    
    valid_emails(inputArr){
        if (inputArr) {
            validationErrors.push();
        }
        console.log('validEmails Method Called');
    }
    
    allowableChars(input, chars) {
        console.log('allowableChars Method Called');

    }


    alpha_numeric(input){
        if (input) {
            validationErrors.push();
        }
        console.log('alphaNumeric Method Called');
    }

    alpha_numeric_spaces(input) {
        if (input) {
            validationErrors.push();
        }
        console.log('alphaNUmericSpaces Method Called');
    }
    
    alpha_dash(input){
        if (input) {
            validationErrors.push();
        }
        console.log('alphaDash Method Called');
    }
    
    numeric(input){
        if (input) {
            validationErrors.push();
        }
        console.log('numeric Method Called');
    }
    
    integer(input){
        if (input) {
            validationErrors.push();
        }
        console.log('integer Method Called');
    }
    
    decimal(input){
        if (input) {
            validationErrors.push();
        }
        console.log('decimal Method Called');
    }
    
    is_natural(input){
        if (input) {
            validationErrors.push();
        }
        console.log('isNatural Method Called');
    }

    is_natural_no_zero(input){
        if (input) {
            validationErrors.push();
        }
        console.log('isNaturalNoZero Method Called');
    }
    
    valid_url(input){
        if (input) {
            validationErrors.push();
        }
        console.log('validURL Method Called');
    }

    differs(input, match) {}

    is_unique(input) {
        if (!input) {
            validationErrors.push();
        }
        console.log('isUnique Method Called');
    }


    exact_length(input, len) {
        if (input.length !== len) {
            validationErrors.push();
        }
        console.log('exactLength Method Called');
    }

    greater_than(input, arg) {
        if (input) {
            validationErrors.push();
        }
        console.log('greaterThan Method Called');
    }

    great_than_equal_to(input, arg) {
        if (input) {
            validationErrors.push();
        }
        console.log('greaThanEqualTo Method Called');
    }

    less_than(input, arg) {
        if (input) {
            validationErrors.push();
        }
        console.log('lessThan Method Called');
    }

    less_than_equal_to(input, arg) {
        if (input) {
            validationErrors.push();
        }
        console.log('lessThanEqualTo Method Called');
    }

    in_list(input, arr){
        if (input) {
            validationErrors.push();
        }
        console.log('inList Method Called');
    }



    valid_ip(input){
        if (input) {
            validationErrors.push();
        }
        console.log('validIP Method Called');
    }

    valid_base64(input){
        if (input) {
            validationErrors.push();
        }
        console.log('validBase64 Method Called');
    }


} // End Class

module.exports = { Validation }