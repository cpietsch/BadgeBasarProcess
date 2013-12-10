var csv = require('csv');
var fs = require('fs');
var forEachAsync = require('forEachAsync');
var request = require('request');


var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    db,meteorites;

var mongoClient = new MongoClient(new Server('localhost', 27017));

mongoClient.open(function(err, mongoClient) {
    db = mongoClient.db("badge");
    var collection = db.collection('badges');

     var cursor = collection.find({ "infocube_id" : {"$ne":"" }})

     //.limit(2);

     cursor.toArray(function(err, docs) {
        
        forEachAsync(docs, function (next, _, i) {
  
          getMandate(_.infocube_id,function(data){
            //console.log(data);
            if(data.status == "success"){
              collection.update({'_id': _._id}, {$set: {mandatesActive: data.data.active.mandates, mandatesInactive: data.data.inactive.mandates}}, {safe:true}, function(err) {
                    if (err) console.warn(err.message);
                    else console.log('successfully updated',_.id,_.name);
                    setTimeout(next,200);
                });
            }
          })
        });
     });

});




var getMandate = function(id,callback){
  console.log("get mandate", id);
  request.post("https://infocube.ch/en/rest/v1.4/person/"+id+"/mandates", {form: { access_token :"807d3e289938eb54c49841bb70673014"}}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body));
    } else {
      console.log("error", error,response);
    }
  });
}
