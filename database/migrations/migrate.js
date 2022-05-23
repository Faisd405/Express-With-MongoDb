require('dotenv').config();

var createCollection = require('./Collection');

try {
    createCollection.Migrate('examples');
} catch (error) {
    console.log(error);    
}



