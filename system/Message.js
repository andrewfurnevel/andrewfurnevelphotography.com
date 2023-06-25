'use strict';

class Message {
    constructor() {
        this.errorMessages = [];
        this.system = [];    
    }

    errors = (error) => {

        this.errorMessages.push(error);
        console.log(this.errorMessages);

        return this.errorMessages;
    }
}

export default Message;