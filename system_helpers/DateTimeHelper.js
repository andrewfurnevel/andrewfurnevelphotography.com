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
  
    // static replaceUnderscoresAndDashesWithSpaces(input) {
    //     // Use the replace method with a regular expression to replace underscores and dashes with spaces

    //     console.log(input);
    //     console.log(input.replace(/[_-]/g, ' '));
    //     // return input.replace(/[_-]/g, ' ');
    // }
      

    static isValidDateTimeFormat(input) {
        // Define the regular expression pattern for the format
        const sanitizedInput = input.replace(/[_-]/g, ' ');
        console.log(`This is inside theisValidDareTimeFormat method: ${sanitizedInput}`);

        const formatPattern = /^(YYYY|MM|DD|HH|mm|ss|TZ)( (YYYY|MM|DD|HH|mm|ss|TZ))*$/;

        if (!formatPattern.test(sanitizedInput)) {
            console.log("The was a big fucking error!!!");
            // throw new Error ("Big Error");
        }
        // Test the input against the pattern

        console.log(formatPattern.test(sanitizedInput));
      }
      


    /**
     * Gets the current date and time formatted according to the provided format string and specified time zone.
     * @param {string} format - The format string specifying the desired date and time format.
     *                         Defaults to 'YYYY-MM-DD_HH-mm-ss'.
     * @param {string} timeZone - The time zone for formatting ('local' for local time zone, 'gmt' for GMT (UTC) time zone).
     *                           Defaults to 'local'.
     * @returns {string} - The formatted date and time string.
     * @example
     * // Example usage:
     * const formattedDateTime = DateTimeHelper.getCurrentDateTime('YYYY/MM/DD HH:mm:ss TZ', 'gmt');
     * // Output: '2023/07/21 21:30:45 GMT'
     */
    static getCurrentDateTime(format = 'YYYY MM DD HH mm ss TZ', timeZone = 'local') {
        // console.log(`This is insdie the getCurrentDateTime method: ${format}`);
        this.isValidDateTimeFormat(format);
        // this.replaceUnderscoresAndDashesWithSpaces(format);
        
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
  