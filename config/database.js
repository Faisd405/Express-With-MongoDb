const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;

class Database {
    static async connect() {
        // connect ke database mongoDB
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        try {
            const db = mongoose.connection;
            db.once('open', () => console.log('Database Connected'));
        } catch (error) {
            db.on('error', (error) => console.error(error));
        }
    }

    static async Migrate(collection, options = {}) {
        MongoClient.connect(process.env.MONGODB_HOST, function (err, db) {
            var dbo = db.db(process.env.MONGODB_DATABASE);
            try {
                //Create a collection named "customers":
                dbo.createCollection(collection, options, function (err, res) {
                    if (err) throw err;
                    console.log("Collection " + collection + " created!");
                    db.close();
                });
            } catch (error) {
                console.log(error);
            }
        });
    }

    static async Rollback(collection) {
        MongoClient.connect(process.env.MONGODB_HOST, function (err, db) {
            var dbo = db.db(process.env.MONGODB_DATABASE);
            if (err) throw err;
            //Drop a collection named "customers":
            dbo.dropCollection(collection, function (err, res) {
                if (err) throw err;
                console.log("Collection " + collection + " deleted!");
                db.close();
            });
        });
    }
}

module.exports = Database;