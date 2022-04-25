'use strict';

class Validation {
    constructor(data) {
        // console.log('Validation Class');
        
        // Validation Rules
        // this.length;
        // this.email;
        // this.match;
        // this.containsChars;
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

        // console.log(this.rules.length);
        // console.log(this.rules)
        // console.log(this.rules[0].length);
        // console.log(this.rules[0][3].length);

        for ( let i = 0; i < this.rules.length; i++) {

            // Get User Input from form (req.body)
            this.input = this.rules[i][2];
            // console.log(`User Input: ${this.input}`);
            
            for ( let j = 0; j < this.rules[i][3].length; j++) { 
                // console.log(`Current Rule: ${this.rules[i][3][j]}`);

                // Set currentRule
                this.currentRule = this.rules[i][3][j];
                
                const containsArg = this.checkForArgs(this.currentRule);
                
                // Rule contains additional arguments
                if (containsArg) {
                    console.log(); // Spacer
                    // Split string into method and arguments
                    const argsArr = this.currentRule.slice(0, -1).split('[');
                    // console.table(argsArr);
                    // console.log(argsArr[0]);
                    // console.log(argsArr[1]);
                    console.log(); // Spacer
                    // console.log(`Method: ${argsArr[0]} Args: ${argsArr[1]}`);
                    eval(`this.${argsArr[0]}(${argsArr[1]}, '${this.input}' )`);
                    
                    // Rule has no additional arguments   
                }  else {
                    console.log(); // Spacer
                    // console.log(`Calling the ${this.currentRule} Method`);
                    eval(`this.${this.currentRule}('${this.input}')`);
                }  
            }             
        } 

        // console.table(this.rules);
        // console.log(this.rules[0][3][0]);
        // console.log(this.rules[3][2].length);


        // NOTE: I'm using eval() which is considered a bad idea and
        // should be replaced with a safe alternative!!! But it works!!!!!
        
        
        // let theString = this.rules[0][3][0];
        // console.log(theString);
        // const validationMethod = String(theString);
        // eval(`this.${validationMethod}()`);
    }


    required(input) {
        // if (!val) {
        //     validationErrors.push = '(Required Entry';
        //     console.log(validationErrors);
        // }

        console.log(`Required Method Called, Input: ${input}`);

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

    minLength(min, input) {
        // if (input.length < min) {
        //     validationErrors.push(`Input Must be A Minimum of ${min} Characters`); 
        // }
        console.log(`minLength Method Called, Input: ${input}`);
    }
    maxLength(max, input) {
        // if (input.length > max) {
        //     validationErrors.push('Input Exceeds the Maximun Length!');
        // }
        console.log(`maxLength Method Called, Input: ${input}`);
    }

    // ------------------------------------------------------------------------
    // Require, minLength & maxLength are receiving the right data. Error not yet set.

    
    valid_email(input){
        if (input) {
            validationErrors.push();
        }
        console.log('validEmail Method Called');
    }
    
    valid_emails(inputArr){
        if (inputArr) {
            validationErrors.push();
        }
        console.log('validEmails Method Called');
    }
    
    allowableChars(input, chars) {
        console.log('allowableChars Method Called');

    }

    alpha(input){
        if (input) {
            validationErrors.push();
        }
        console.log('alpha Method Called');
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