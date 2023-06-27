'use strict';

class Message {

    static errorMsgs = [];

    static set error(errorMsg) {
        this.errorMsgs.push(errorMsg);
    }
    
    static get errors() {
        const errors = this.errorMsgs;
        this.errorMsgs = [];
        
        return errors;
    }
}

export default Message;