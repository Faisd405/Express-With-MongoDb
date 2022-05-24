require('dotenv').config();

var Collection = require('./Collection');

try {
    Collection.Rollback('examples');
    Collection.Rollback('users');
} catch (error) {
    console.log(error);    
}
