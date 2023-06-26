'use strict';

class Message {

    static errorMsgs = [];

    static set error(errorMsg) {
        this.errorMsgs.push(errorMsg);
    }
    
    static get errors() {
        return this.errorMsgs;
    }
}

export default Message;