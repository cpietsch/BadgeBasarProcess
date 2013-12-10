var csv = require('csv');
var fs = require('fs');

var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    db,meteorites;

var mongoClient = new MongoClient(new Server('localhost', 27017));

mongoClient.open(function(err, mongoClient) {
    db = mongoClient.db("badges");

    var badges = db.collection('badges');

    csv()
    .from.path(__dirname+'/../data/badges-new.csv', {
      columns: true
    })
    .on('record', function(item,index){
      	if(item.name!=0){
      		delete item[""];
			badges.insert(item, function(err, docs) {
				console.log(err,docs)
			});
		}
    })
    .on('close', function(count){
      db.close();
    })
   //  .to.array( function(data){
   //  	data.forEach(function(item){
			// console.log(item.name);
			// if(item.name!=0){
			// 	collection.insert(item, function(err, docs) {
			// 		console.log(err,docs)
			// 	});
			// }    		
   //  	});
   //  });

    //db.close();
});



