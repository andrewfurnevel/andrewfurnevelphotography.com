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
            let userInput = this.rules[i][2];
            console.log(userInput);

            
            
            for ( let j = 0; j < this.rules[i][3].length; j++) {
                console.log(this.rules[i][3][j]);

                // Set currentRule
                let currentRule = this.rules[i][3][j];
                
                const containsArg = this.checkForArgs(currentRule);

                if (containsArg) {
                    console.log('Yes it has additional args!!!');
                    const newArr = currentRule.slice(0, -1).split('[');
                    console.table(newArr);
                }  else {
                    console.log(`Calling the ${currentRule} Method`);
                }  
            }             
        } 

        // console.table(this.rules);
        // console.log(this.rules[0][3][0]);
        // console.log(this.rules[3][2].length);


        // NOTE: I'm using eval() which is considered a bad idea and
        // should be replaced with a safe alternative!!! But it works!!!!!
        
        
        let theString = this.rules[0][3][0];
        console.log(theString);
        const validationMethod = String(theString);
        eval(`this.${validationMethod}()`);
    }


    testRun() {
        // console.log('Test Run Ran!');
    }

    required() {
        // if (!val) {
        //     validationErrors.push = '(Required Entry';
        //     console.log(validationErrors);
        // }

        console.log('Required Method Called');

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
        console.log('regexMatch Method Called');
    }

    differs(val_a, val_b) {}

    is_unique(val) {
        if (!val) {
            validationErrors.push();
        }
        console.log('isUnique Method Called');
    }

    minLength(val, min) {
        if (val.length < min) {
            validationErrors.push(`Input Must be A Minimum of ${min} Characters`); 
        }
        console.log('minLength Method Called');
    }
    maxLength(val, max) {
        if (val.length > max) {
            validationErrors.push('Input Exceeds the Maximun Length!');
        }
        console.log('maxLength Method Called');
    }

    exact_length(val, len) {
        if (val.length !== len) {
            validationErrors.push();
        }
        console.log('exactLength Method Called');
    }

    greater_than(val) {
        if (val) {
            validationErrors.push();
        }
        console.log('greaterThan Method Called');
    }

    great_than_equal_to(val) {
        if (val) {
            validationErrors.push();
        }
        console.log('greaThanEqualTo Method Called');
    }

    less_than(val) {
        if (val) {
            validationErrors.push();
        }
        console.log('lessThan Method Called');
    }

    less_than_equal_to(val) {
        if (val) {
            validationErrors.push();
        }
        console.log('lessThanEqualTo Method Called');
    }

    in_list(val, arr){
        if (val) {
            validationErrors.push();
        }
        console.log('inList Method Called');
    }

    alpha(val){
        if (val) {
            validationErrors.push();
        }
        console.log('alpha Method Called');
    }

    alpha_numeric(val){
        if (val) {
            validationErrors.push();
        }
        console.log('alphaNumeric Method Called');
    }

    alpha_numeric_spaces(val) {
        if (val) {
            validationErrors.push();
        }
        console.log('alphaNUmericSpaces Method Called');
    }

    alpha_dash(val){
        if (val) {
            validationErrors.push();
        }
        console.log('alphaDash Method Called');
    }

    numeric(val){
        if (val) {
            validationErrors.push();
        }
        console.log('numeric Method Called');
    }

    integer(val){
        if (val) {
            validationErrors.push();
        }
        console.log('integer Method Called');
    }

    decimal(val){
        if (val) {
            validationErrors.push();
        }
        console.log('decimal Method Called');
    }

    is_natural(val){
        if (val) {
            validationErrors.push();
        }
        console.log('isNatural Method Called');
    }

    is_natural_no_zero(val){
        if (val) {
            validationErrors.push();
        }
        console.log('isNaturalNoZero Method Called');
    }

    valid_url(val){
        if (val) {
            validationErrors.push();
        }
        console.log('validURL Method Called');
    }

    valid_email(val){
        if (val) {
            validationErrors.push();
        }
        console.log('validEmail Method Called');
    }

    valid_emails(val){
        if (val) {
            validationErrors.push();
        }
        console.log('validEmails Method Called');
    }

    valid_ip(val){
        if (val) {
            validationErrors.push();
        }
        console.log('validIP Method Called');
    }

    valid_base64(val){
        if (val) {
            validationErrors.push();
        }
        console.log('validBase64 Method Called');
    }

    allowableChars(val) {
        console.log('allowableChars Method Called');
    }

} // End Class

module.exports = { Validation }