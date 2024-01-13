var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://2663826o:Ghostface321@sh34.zgnuc0z.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created successfully");
    db.close();
});