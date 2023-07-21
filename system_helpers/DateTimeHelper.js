'use strict';

class DateTimeHelper {
    constructor() {}
    
    static getDateTimeObj() {

        const currentDate = new Date();

        const dateTimeObj= {};

        dateTimeObj.year = currentDate.getFullYear();
        dateTimeObj.month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
        dateTimeObj.day = currentDate.getDate().toString().padStart(2, "0");
        dateTimeObj.hour = currentDate.getHours().toString().padStart(2, "0");
        dateTimeObj.minute = currentDate.getMinutes().toString().padStart(2, "0");
        dateTimeObj.second = currentDate.getSeconds().toString().padStart(2, "0");
        dateTimeObj.localTimeZone = currentDate.toLocaleString("en", { timeZoneName: "short" }).split(" ").pop();

        return dateTimeObj;
    }

    static getCurrentDate() {
        const dateTimeObj = this.getDateTimeObj();
        return `${dateTimeObj.year}-${dateTimeObj.month}-${dateTimeObj.day}`;
    }
    
    static getCurrentTime() {
        const dateTimeObj = this.getDateTimeObj();
        return `${dateTimeObj.hour}-${dateTimeObj.minute}-${dateTimeObj.second}`;
    }
    
    static getCurrentDateTime() {
        const dateTimeObj = this.getDateTimeObj();
        return `${dateTimeObj.year}-${dateTimeObj.month}-${dateTimeObj.day}_${dateTimeObj.hour}-${dateTimeObj.minute}-${dateTimeObj.second}`;
    }
    
    static getYear() {
        const dateTimeObj = this.getDateTimeObj();
        return `${dateTimeObj.year}`; 
    }
    
    static getMonth() {
        const dateTimeObj = this.getDateTimeObj();
        return `${dateTimeObj.month}`;     
    }

    static getDay() {
        const dateTimeObj = this.getDateTimeObj();
        return `${dateTimeObj.day}`;     
    }
    
    static getLocalTimeZone() {
        const dateTimeObj = this.getDateTimeObj();
        return `${dateTimeObj.localTimeZone}`; 
    }

} // End Class

export default DateTimeHelper;

