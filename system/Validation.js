'use strict';

import Message from './Message.js';

class Validation {
    constructor(data) { 

        this.validationMethod;
        this.validationErrors= [];

        this.rules = [];
        this.imput;
        this.currentRule;
        
    }

    setRule(rules) {
        this.rules.push(rules)
    }

    showRules() {
        // console.table(this.rules);
    }

    // Need to incorporate this into the run() method.
    checkForArgs(arg) {
        var regex = /\[/g;
        return regex.test(arg);
    } 
    
    // Run validaion on the form input
    run() { 

        // console.log(this.rules);
   
        // try {
        //     console.log(this.rules[3][2].length);
        // }

        // catch {
        //     console.log('Wrong Number Of Parameters!');
        //     console.log('Parameter Format Should Be: [label, name, req.body.name, [rules]]')
        // }

        // console.table(this.rules);

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
                    
                    // console.log('');            
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
        return this.validationErrors;
    }

    // Validation Methods -------------------------------------------------------
// Tested
    required(legend, name, input) {

        if (input == undefined || input == "") {
            this.validationErrors.push(`${legend} Required`);

            return this.validationErrors;
        }
    }

    // --------------------------------------------------------------------------
    
    // Tested
    min_length(legend, name, input, minLength) {
        
        if (input.length < minLength) {
            this.validationErrors.push(`${legend} Must be at Least ${minLength} Characters`); 
            
            return this.validationErrors;      
        }
    }
    
    // --------------------------------------------------------------------------
    // Tested
    max_length(legend, name, input, maxLength) {
        
        if (input.length > maxLength) {
            this.validationErrors.push(`${legend} Cannot be more than ${maxLength} Characters`); 
            
            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------
    // Tested   
    valid_email(legend, name, input){
        
        const regex = /[a-zA-Z0-9_+.-]+@[a-zA-z0-9-]+\.[a-zA-Z0-9-.]+/;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} is Not a Valid Email Address!`); 
            
            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------
    // Tested  
    alpha(legend, name, input){
        
        const regex = /^[a-z]+$/i;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Can Only Contain Alpha Characters`);
            
            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------
    // Tested   
    numeric(legend, name, input){
        
        const regex =/^[0-9]+$/;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Can Only Contain Numeric Characters`);
            
            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------
    // Tested   
    alpha_numeric(legend, name, input){
        
        const regex = /^[a-zA-Z0-9]+$/;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Can Only Contain Alpha Numeric Characters`);
            
            return this.validationErrors;
        }   
    }
    
    // --------------------------------------------------------------------------
    // Tested   
    alpha_numeric_spaces(legend, name, input) {
        
        const regex = /^[a-zA-Z0-9\s]+$/;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend}: Only Alpha Numberic Characters and Spaces are Allowed`);
            
            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------
    // Tested
    alpha_numeric_dashes(legend, name, input){
        
        const regex = /^[a-zA-Z0-9-]+$/;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend}: Only Alpha Numeric Characters and Dashes are Allowed`);
            
            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------
    // Tested
    
    alpha_numeric_dashes_underscores(legend, name, input) {
        
        const regex = /^[a-zA-Z0-9_-]+$/;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend}: Only Alpha Numeric Characters, Underscores and Dashes are Allowed`);
            
            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------
    // Tested
    // Whole numbers that can be positive or negative and include zero.

    integer(legend, name, input){
        
        const regex = /^[0-9]+$/;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Must Be A Positive Integer`);
            
            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------
    // Tested

    decimal(legend, name, input){
        
        const regex = /\d+\.?\d*/;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Must Be A Decimal Number`);
            
            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------
    // Tested
    // Can only be a positive whole integer starting from 1 

    natural_number(legend, name, input){
        
        const regex = /^[0-9]+$/;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Must Be A Natural Number`);
            
            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------
    // Tested
    natural_number_no_zeros(legend, name, input){
        
        const regex = /^[1-9]+$/;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Must Be A Natural Number With No Zeros`);
            
            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------
    // Tested
    // Allows but does not require alpha-numeric and speical characters.

    special_chars(legend, name, input) {
        
        const regex = /[a-zA-z0-9@!#$%^&*()_?{}\+-\w]/;

        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Can Only Contain Alpha Numeric and @!#$%^&*()_?{}\+- Characters`);
            
            return this.validationErrors;
        }
    }
    // --------------------------------------------------------------------------
    // Tested
    // Must contain upper and lower case alpha, numeric and special characters.
    require_special_chars(legend, name, input) {
        
        const alphanumericRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#$%^&*()_?{}\+\-])/;
        
        if (alphanumericRegex.test(input) == false) {
            this.validationErrors.push(`${legend} Must Contain At Least One of the Following: Upper Case and Lower Case Characters, Numbers and the Following Special Characters @!#$%^&*()_?{}\+-`);
            
            return this.validationErrors;
        }
    }

    // --------------------------------------------------------------------------
    // Tested

    valid_url(legend, name, input){ 
        
        const regex = /^(ftp|http|https):\/\/[^ "]+(\.[^ "]+)+$/;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Is Not A Valid URL`);
            
            return this.validationErrors;
        }
        console.log('validURL Method Called');
    }
    
    // ------------------------------------------------------------------------ 
    // Tested
    // Tests validity of multiple emails at once.

    valid_emails(legend, name, input){

        input = input.replace(/\s/g, ''); // Remove spaces
        const inputArr = input.split(',');

        // const regex = /[a-zA-Z0-9_+.-]+@{a-zA-z0-9-]+\.[a-zA-Z0-9-.]+/;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let email ='';
        
        for(let i = 0; i < inputArr.length; i++) {
    
            if (!regex.test(inputArr[i])) {
            this.validationErrors.push(`${inputArr[i]} is not a valid email address!`); 
            }
        }    
            
        return this.validationErrors;
        console.log('validEmails Method Called');
    } 
    
    // --------------------------------------------------------------------------
    // Tested
    // Matches two input fields.

    matches(legend, name, input, match) {
        console.log(legend, name, input, match);
        if (input !== match) {
            this.validationErrors.push(`${legend} Does Not Match ${match}!`);

            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------
    
    regex_match(legend, name, input, regex) {
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} is InValid`);

            return this.validationErrors;
        }
        console.log('regexMatch Method Called');
    }
    
    
    // --------------------------------------------------------------------------
    // Still To Do
    differs(legend, name, input, arg) {

        if (input !== arg) {
            this.validationErrors.push(`${legend} Differs From ${arg}`);

            return this.validationErrors;
        }
        console.log('unique Method Called');   
    }

    // --------------------------------------------------------------------------

    exact_length(legend, name, input, arg) {

        if (input.length !== len) {
            this.validationErrors.push(`${legend} Must Be Of Length ${arg}`);

            return this.validationErrors;
        }
        console.log('exactLength Method Called');
    }

    // --------------------------------------------------------------------------
    // To Do
    greater_than(legend, name, input, arg) {

        const regex = / /;

        if (input < arg ) {
            this.validationErrors.push(`${legend} Must Be Great Than ${arg}`);
            
            return this.validationErrors;
        }
        console.log('greaterThan Method Called');
    }

    // --------------------------------------------------------------------------
    // To Do
    great_than_equal_to(legend, name, input, arg) {

        if (input <= arg ) {
            this.validationErrors.push(`${legend} Must Be Great Than Or Equal To ${arg}`);
            
            return this.validationErrors;
        }
        console.log('greaThanEqualTo Method Called');
    }

    // --------------------------------------------------------------------------
   // To Do
    less_than(legend, name, input, arg) {

        if (input > arg ) {
            this.validationErrors.push(`${legend} Must Be Less Than ${arg}`);
            
            return this.validationErrors;
        }
        console.log('lessThan Method Called');
    }

    // --------------------------------------------------------------------------
   // To Do
    less_than_equal_to(legend, name, input, arg) {

        if (input >= arg ) {
            this.validationErrors.push(`${legend} Must Be Less Than Or Equal To ${arg}`);
            
            return this.validationErrors;
        }
        console.log('lessThanEqualTo Method Called');
    }

    // --------------------------------------------------------------------------
    // Requires Callback to Database
    in_list(legend, name, input, arr){

        const regex = / /;

        if (input) {
            this.validationErrors.push(`${legend }Must Be In The List`);
            
            return this.validationErrors;
        }
        console.log('inList Method Called');
    }

    // --------------------------------------------------------------------------

    valid_ip(legend, name, input){

        const regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} is Not a Valid IP Address`);
           
            return this.validationErrors;
        }
    }

    // --------------------------------------------------------------------------

    valid_base64(legend, name, input){

        const regex = /^([A-Za-z0-9+/]{4})*/;

        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} is Not Valid Base 64`);
            
            return this.validationErrors;
        }
    }

    // --------------------------------------------------------------------------
  
   

} // End Class

export default Validation;