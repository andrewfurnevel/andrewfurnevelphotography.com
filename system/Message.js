/**
 * Represents a message class with static error handling functionality.
 * @class
 */
class Message {
    /**
     * Array to store error messages.
     * @type {Array.<string>}
     * @static
     */
    static errorMsgs = [];

    /**
     * Adds an error message to the error messages array.
     * @param {string} errorMsg - The error message to add.
     * @throws {TypeError} - If errorMsg is not a string.
     * @static
     */
    static set error(errorMsg) {
        if (typeof errorMsg !== 'string') {
            throw new TypeError('errorMsg must be a string');
        }
        this.errorMsgs.push(errorMsg);
    }

    /**
     * Retrieves and clears the error messages array.
     * @returns {Array.<string>} - The array of error messages.
     * @static
     */
    static get errors() {
        const errors = this.errorMsgs;
        this.errorMsgs = [];
        return errors;
    }

    static test() {
        console.log("Test");
    }
}

export default Message;
