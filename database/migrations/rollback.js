require('dotenv').config();

var Database = require('../../config/database');

try {
    Database.Rollback('examples');
    Database.Rollback('users');
} catch (error) {
    console.log(error);    
}
