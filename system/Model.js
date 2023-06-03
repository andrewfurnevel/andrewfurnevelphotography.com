// Model.js

'use strict';

// Imports
import DB from './DB.js';


class Model {
    
    constructor() {
          
        this.db = new DB();
        this.pool = this.db.pool;
    }

} // End Class

export default Model;
