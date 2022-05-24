require('dotenv').config();

var Database = require('../../config/database');

try {
    // Collections.Migrate('collection_name', {});
    Database.Migrate('examples');
    Database.Migrate('users');
} catch (error) {
    console.log(error);    
}



