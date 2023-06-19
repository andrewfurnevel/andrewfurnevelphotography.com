'use strict';

class Validation {
    constructor(data) { 

        this.validationMethod;
        this.validationErrors= [];

        this.rules = [];
        this.imput;
        this.currentRule;
        
    }



    // Change this to setRule
    setRule(rules) {
        this.rules.push(rules)
        // console.table(this.rules);
    }



    showRules() {
        // console.table(this.rules);
    }

    // Need to incorporate this into the run() method.
    checkForArgs(arg) {
        let regex = /\[/g;
        return regex.test(arg);
    } 
    
    // Run validaion on the entry
    run() { 
        // console.log(input);
        // console.log(rules);

        console.log(`Length: ${this.rules.length}`);
        
        // this.input = input;
        // this.rules = rules;

   
        try {
            // console.log("Inside try block");
            // console.log(this.rules[3][2].length);
        }

        catch {
            console.log('Wrong Number Of Parameters!');
            console.log('Parameter Format Should Be: [label, name, req.body.name, [rules]]')
        }

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
                // console.log('');            
            } 
        } 
        return this.validationErrors;
    }

    // Validation Methods -------------------------------------------------------

    required(legend, name, input) {

        if (input == undefined || input == "") {
            this.validationErrors.push(`${legend} Required`);

            return this.validationErrors;
        }
    }

    // --------------------------------------------------------------------------
    
    matches(legend, name, input, arg) {

        if (input !== arg) {
            this.validationErrors.push(`${legend} Does Not Match ${arg}!`);

            return this.validationErrors;
        }
        console.log(`matches Method Called`);
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

    minLength(legend, name, input, minLength) {

        if (input.length < minLength) {
            this.validationErrors.push(`${legend} Must be at Least ${minLength} Characters`); 

            return this.validationErrors;      
        }
    }

    // --------------------------------------------------------------------------

    maxLength(legend, name, input, maxLength) {

        if (input.length > maxLength) {
            this.validationErrors.push(`${legend} Must be at Least ${maxLength} Characters`); 

            return this.validationErrors;
            }
        }
   
    // --------------------------------------------------------------------------
    
    alpha(legend, name, input){
        
        const regex = /^[a-z]+$/i;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Can Only Contain Alpha Characters`);
            
            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------
    
    numeric(legend, name, input){
        
        const regex =/^[0-9]+$/;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Can Only Contain Numeric Characters`);
            
            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------

    alpha_numeric(legend, name, input){
        
        const regex = /^[a-z0-9]+$/i;

        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Can Only Contain Alpha Numeric Characters`);

            return this.validationErrors;
        }   
    }

    // --------------------------------------------------------------------------

    alpha_numeric_spaces(legend, name, input) {

        const regex = /^[a-z0-9\s]+$/i;

        if (!regex.test(input)) {
            this.validationErrors.push(`${legend}: Only Alph Numberic Characters and Spaces are Allowed`);

            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------
    
    alpha_numeric_dashes(legend, name, input){
        
        const regex = /^[a-zA-Z0-9-]+$/i;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend}: Only Alpha Numeric Characters and Dashes are Allowed`);
            
            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------
    
    alpha_numeric_dashes_underscores(legend, name, input) {
        
        const regex = /^[a-zA-Z0-9_-]+$/i;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend}: Only Alpha Numeric Characters, Underscores and Dashes are Allowed`);
            
            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------
    
    integer(legend, name, input){
        
        const regex = /^[0-9]+$/;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Must Be An Integer`);
            
            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------
    
    decimal(legend, name, input){
        
        const regex = /\d+\.?\d*/;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Must Be A Decimal Number`);
            
            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------
    
    is_natural(legend, name, input){
        
        const regex = /^[0-9]+$/;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Must Be A Natural Number`);
            
            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------
   
    is_natural_no_zero(legend, name, input){
        
        const regex = /^[1-9]+$/;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Must Be A Natural Number With No Zeros`);
            
            return this.validationErrors;
        }
    }
    
    // --------------------------------------------------------------------------
    
    valid_email(legend, name, input){

        const regex = /[a-zA-Z0-9_+.-]+@[a-zA-z0-9-]+\.[a-zA-Z0-9-.]+/;

        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} is Not a Valid Email Address!`); 

            return this.validationErrors;
        }
    }

    // ------------------------------------------------------------------------ 
    // Still to do!!!    
    valid_emails(inputArr){
        // Need to reate loop to loop through emails and validation each one.
        const regex = /[a-zA-Z0-9_+.-]+@{a-zA-z0-9-]+\.[a-zA-Z0-9-.]+/;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} is Not a Valid Email Address!`); 
            
            return this.validationErrors;
        }
        console.log('validEmails Method Called');
    } 

    // --------------------------------------------------------------------------

    special_chars(legend, name, input) {

        const regex = /[@!#$%^&*()_?{}\+-\w]/;

        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Can Only Contain Alpha Numeric and @!#$%^&*()_?{}\+- Characters`);

            return this.validationErrors;
        }
    }

    // --------------------------------------------------------------------------
    // Wrong Regex
    valid_url(legend, name, input){ 
        
        const regex = /((http|https):\/\/)(www.)? /;
        
        if (!regex.test(input)) {
            this.validationErrors.push(`${legend} Is Not A Valid URL`);
            
            return this.validationErrors;
        }
        console.log('validURL Method Called');
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
    // Still To Do
    unique(legend, name, input) { 

        // Need to add a ccallback to check input against database entries.
        if (!input) {
            this.validationErrors.push(`${legend} Has Already Been Taken. Please Choose Another ${legend}`);

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