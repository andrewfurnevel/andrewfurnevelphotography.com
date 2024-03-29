/**
 * A utility class for working with date and time.
 */
class DateTimeHelper {
    /**
     * Returns an object representing the current date and time in both the local time zone and GMT (UTC) time zone.
     * @returns {Object} - An object containing date and time information for both time zones.
     * @property {number} year - The current year.
     * @property {string} month - The current month (zero-padded to two digits).
     * @property {string} day - The current day (zero-padded to two digits).
     * @property {string} hour - The current hour (zero-padded to two digits).
     * @property {string} minute - The current minute (zero-padded to two digits).
     * @property {string} second - The current second (zero-padded to two digits).
     * @property {string} localTimeZone - The short name of the local time zone (e.g., 'PDT', 'EST').
     * @property {string} gmtTimeZone - The short name of the GMT (UTC) time zone (e.g., 'GMT', 'UTC').
     */
    static getDateTimeObj() {
      const currentDate = new Date();
      return {
        year: currentDate.getFullYear(),
        month: (currentDate.getMonth() + 1).toString().padStart(2, "0"),
        day: currentDate.getDate().toString().padStart(2, "0"),
        hour: currentDate.getHours().toString().padStart(2, "0"),
        minute: currentDate.getMinutes().toString().padStart(2, "0"),
        second: currentDate.getSeconds().toString().padStart(2, "0"),
        localTimeZone: currentDate.toLocaleString("en", { timeZoneName: "short" }).split(" ").pop(),
        gmtTimeZone: "GMT" // This will always be GMT (UTC).
      };
    }
      

    static isValidDateTimeFormat(input) {
        let sanitizedInput = input.replace(/[_-]/g, ' ');
        const formatPattern = /^(YYYY|MM|DD|HH|mm|ss|TZ)( (YYYY|MM|DD|HH|mm|ss|TZ))*$/;

        // console.log((formatPattern.test(sanitizedInput)) ?  sanitizedInput : false);
        return (formatPattern.test(sanitizedInput)) ? sanitizedInput : false ;
    }
      

    /**
     * Gets the current date and time formatted according to the provided format string and specified time zone.
     * @param {string} format - The format string specifying the desired date and time format. Defaults to 'YYYY-MM-DD_HH-mm-ss'.
     * @param {string} timeZone - The time zone for formatting ('local' for local time zone, 'gmt' for GMT (UTC) time zone). Defaults to 'local'.
     * @returns {string} - The formatted date and time string.
     * @example
     * // Example usage:
     * const formattedDateTime = DateTimeHelper.getCurrentDateTime('YYYY/MM/DD HH:mm:ss TZ', 'gmt');
     * // Output: '2023/07/21 21:30:45 GMT'
     */
    static getCurrentDateTime(format = 'YYYY MM DD HH mm ss TZ', timeZone = 'local') {
        
        if (!this.isValidDateTimeFormat(format)) {
            return "Invalid Date / Time Format. Must be YYYY MM DD HH mm ss";
        }
        
        const dateTimeObj = this.getDateTimeObj(format);

        const formatMap = {
            'YYYY': dateTimeObj.year,
            'MM': dateTimeObj.month,
            'DD': dateTimeObj.day,
            'HH': dateTimeObj.hour,
            'mm': dateTimeObj.minute,
            'ss': dateTimeObj.second,
            'TZ': timeZone === 'GMT' ? dateTimeObj.gmtTimeZone : dateTimeObj.localTimeZone
        };
      return format.replace(/YYYY|MM|DD|HH|mm|ss|TZ/g, match => formatMap[match]);
    }
  }
  
  export default DateTimeHelper;
  