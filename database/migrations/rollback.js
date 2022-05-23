require('dotenv').config();

var Collection = require('./Collection');

try {
    Collection.Rollback('examples');
} catch (error) {
    console.log(error);    
}
