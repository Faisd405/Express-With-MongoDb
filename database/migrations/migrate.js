require('dotenv').config();

var Collection = require('./Collection');

try {
    // Collections.Migrate('collection_name', {});
    Collection.Migrate('examples');
    Collection.Migrate('users');
} catch (error) {
    console.log(error);    
}



