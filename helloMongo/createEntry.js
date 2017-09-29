var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db){
	if (err) throw err;
	var myobj = { name: "Company LTD", address: "Highway 37"};
	db.collection("customers").insertOne(myobj, function(err, res) {
		if (err) throw err;
		console.log("1 document created!");
		db.close();
	});

});
