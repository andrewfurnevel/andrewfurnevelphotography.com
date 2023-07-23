'use strict';

import { exec } from 'child_process';
import absPath from '../_config.js';
import DateTimeHelper from './DateTimeHelper.js';

class DatabaseHelper {

    constructor() {
        // const dateTimeHelper = new DateTimeHelper;
    }

    static test(user, host, port, database, backupLocation) { 
        
        // Display the result
        // const command = `pg_dumb -U ${user} -h ${host} -p ${port} -d ${database} -f ${backupLocation}_${formattedTime}`;
        // console.log(command);

        console.log(DateTimeHelper.getCurrentDateTime('YYYY-MM-DD_HH-mmww-ss_TZ'));
        // console.log(DateTimeHelper.getCurrentTime());
        // console.log(DateTimeHelper.getCurrentDateTime());

        // console.log(DateTimeHelper.getLocalTimeZone());
    
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

}


// backupDatabase('pg_dump -U postgres -h 127.0.0.1 -p 5432 -d andrewfurnevel -f ~/andrewfurnevel.sql');


// Example usage:
// runTerminalCommand('ls -la'); // Replace 'ls -la' with the command you want to run


export default DatabaseHelper;