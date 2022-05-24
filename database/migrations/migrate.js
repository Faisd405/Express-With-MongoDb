require('dotenv').config();

var Collection = require('./Collection');

try {
    Collection.Migrate('examples');
    Collection.Migrate('users');
} catch (error) {
    console.log(error);    
}



