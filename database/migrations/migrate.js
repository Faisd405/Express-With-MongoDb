require('dotenv').config();

var Collection = require('./Collection');

try {
    Collection.Migrate('examples');
} catch (error) {
    console.log(error);    
}



