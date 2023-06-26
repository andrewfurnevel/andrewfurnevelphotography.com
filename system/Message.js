'use strict';

class Message {

    static errorMsgs = [];

    static set error(errorMsg) {
        this.errorMsgs.push(errorMsg);
    }
    
    static get errors() {
        return this.errorMsgs;
    }

    static resetErrors() {
        console.log("Resetting the Messages Array");
        this.errorMsgs = [];
    }
}

export default Message;