'use strict';

import { exec } from 'child_process';
import absPath from '../_config.js';
import DateTimeHelper from './DateTimeHelper.js';


class DatabaseHelper {

    constructor() {
        const dateTimeHelper = new DateTimeHelper;
    }

    static test(user, host, port, database, backupLocation) { 
        // console.log(`Backup Name: ${database}`);
        // console.log(`Backup Location: ${backupLocation}`);

        
        
        const currentDate = new Date();
        const timeZoneAbbreviation = currentDate.toLocaleString("en", { timeZoneName: "short" }).split(" ").pop();
        
        console.log(DateTimeHelper.getCurrentDate());


        // console.log(currentDate.getHours());
        // console.log(currentDate.getMinutes());
        // console.log(currentDate.getSeconds());
        
        // const seconds = currentDate.getSeconds < '10' ? `0${currentDate.getSeconds()}` : currentDate.getSeconds();
        
        // console.log(`${currentDate.getHours()}-${currentDate.getMinutes()}-${seconds}-${timeZoneAbbreviation}`);
        
        //--------------------
        
        // Get the current time components with leading zeros
        const hours = currentDate.getHours().toString().padStart(2, "0");
        const minutes = currentDate.getMinutes().toString().padStart(2, "0");
        const seconds = currentDate.getSeconds().toString().padStart(2, "0");
        
        // Format the output as a string
        const formattedTime = `${hours}-${minutes}-${seconds}-${timeZoneAbbreviation}`;
        
        // Display the result
        const command = `pg_dumb -U ${user} -h ${host} -p ${port} -d ${database} -f ${backupLocation}_${formattedTime}`;
        console.log("Current Time with Leading Zeros:", formattedTime);
        console.log(command);
        
        
        // console.log(currentDate.toISOString())
        // console.log(timeZoneAbbreviation);
        
        // console.log(DateTimeHelper.getCurrentDateTime());
    }
    
    // backupDatabase('pg_dump -U postgres -h 127.0.0.1 -p 5432 -d andrewfurnevel -f ~/andrewfurnevel.sql');
    
    // static runTerminalCommand(command) {
    // exec(command, (error, stdout, stderr) => {
    //     if (error) {
    //         console.error(`Error: ${error.message}`);
    //         return;
    //     }
    //         console.log('Standard Output:');
    //         console.log(stdout);
    //         console.error('Standard Error:');
    //         console.error(stderr);
    //     });
    // }
}
    
// backupDatabase('pg_dump -U postgres -h 127.0.0.1 -p 5432 -d andrewfurnevel -f ~/andrewfurnevel.sql');


// Example usage:
// runTerminalCommand('ls -la'); // Replace 'ls -la' with the command you want to run


export default DatabaseHelper;