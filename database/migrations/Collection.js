var MongoClient = require('mongodb').MongoClient;

class CreateCollection {
    static async Migrate(collection) {
        MongoClient.connect(process.env.MONGODB_HOST, function (err, db) {
            var dbo = db.db("belajar");
            try {
                //Create a collection named "customers":
                dbo.createCollection(collection, function (err, res) {
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
            if (err) throw err;
            //Drop a collection named "customers":
            db.dropCollection(collection, function (err, res) {
                if (err) throw err;
                console.log("Collection " + collection + " deleted!");
                db.close();
            });
        });
    }
}

module.exports = CreateCollection;