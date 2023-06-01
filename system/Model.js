// Model.js

'use strict';

// Imports
// const config = require(`${process.env.APP_ROOT}/_config.js`);

// const DB = require(`${process.env.APP_ROOT}/system/DB.js`);
import DB from './DB.js';


class Model {
    
    constructor() {
          
        this.db = new DB();
        this.pool = this.db.pool;
        
        // console.log(this.db);
        // console.log(this.db.pool);
        
        // Client does not work in the model
        // this.client = this.db.client();
    }

} // End Class

export default Model;
