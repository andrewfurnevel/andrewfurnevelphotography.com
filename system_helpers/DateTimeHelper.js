'use strict';

class DateTimeHelper {
    constructor() {

        this.currentDate = new Date();

        this.year = this.currentDate.getFullYear();
        this.month = this.currentDate.getMonth() + 1;
        this.day = this.currentDate.getDate();
        this.hours = this.currentDate.getHours();
        this.minutes = this.currentDate.getMinutes();
        this.seconds = this.currentDate.getSeconds();

        this.formattedDate = `${this.year}-${this.month}-${this.day}`;
        this.formattedTime = `${this.hours}:${this.minutes}:${this.seconds}`;
    }

    static getCurrentDate() {
        return `${year}-${month}-${day}`;
    }

    static getCurrentTime() {
        return `${hours}:${minutes}:${seconds}`;
    }

    static getCurrentDateTime() {
        return this.currentDate.toISOString();
    }

    static getYear() {
        return; 
    }
}

export default DateTimeHelper;

