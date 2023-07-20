'use strict';

import { exec } from 'child_process';
import absPath from '../_config.js';
import DateTimeHelper from './DateTimeHelper.js';


class DatabaseHelper {

    construtor() {

    }

    static test(user, host, port, database, backupLocation) { 
        console.log(`Backup Name: ${database}`);
        console.log(`Backup Location: ${backupLocation}`);

        const command = `pg_dumb -U ${user} -h ${host} -p ${port} -d ${database} -f ${backupLocation}`;

        console.log(command);

        const currentDate = new Date();
        const timeZoneAbbreviation = currentDate.toLocaleString("en", { timeZoneName: "short" }).split(" ").pop();


        // console.log(currentDate.getHours());
        // console.log(currentDate.getMinutes());
        console.log(currentDate.getSeconds());

        const seconds = currentDate.getSeconds < '10' ? `0${currentDate.getSeconds()}` : currentDate.getSeconds();
        
        console.log(`${currentDate.getHours()}-${currentDate.getMinutes()}-${seconds}-${timeZoneAbbreviation}`);

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