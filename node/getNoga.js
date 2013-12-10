var csv = require('csv');
var fs = require('fs');
var async = require('async');
var request = require('request');
var _ = require('lodash');


var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    db,meteorites;

var mongoClient = new MongoClient(new Server('localhost', 27017));

mongoClient.open(function(err, mongoClient) {
    db = mongoClient.db("badges");

    var firmenDB = db.collection('firmen');
    var mandateDB = db.collection('mandate');
    var nogaDB = db.collection('nogaFunktionen');
    var badges = db.collection('badges');
    var nogaDB = db.collection('allnoga');

    /* person details */
    // badges
    //   .find({ "infocube_id" : {"$ne":"" }})
    //   .toArray(function(err, data) {
    //     //console.log(data);
    //     async.eachSeries(data, function(item,callback){

    //       getApi("person/"+item.infocube_id, function(data){

    //         console.log(data);
    //         var person = null;
    //         if(data.status != "error") {
    //           person = data.data.person;
    //         }

    //         badges.update({'_id': item._id}, {$set: {person: person}}, {safe:true}, function(err) {
    //             if (err) console.warn(err.message);
    //             else console.log('successfully updated',item.id,item.name);
    //             callback(null);
    //         });                

    //       });
          
    //     }, function(err){
    //       console.log("Error",err);
    //       db.close();
    //     });

    // });

    /* get active mandates first round */
    // badges
    //   .find({ "infocube_id" : {"$ne":"" }})
    //   .toArray(function(err, data) {
        
    //     async.eachSeries(data, function(item,callback){
    //       getApi("person/"+item.infocube_id+"/mandates", function(data){
    //         //console.log(data);

    //         var mandates = null;
    //         if(data.status != "error"){
    //           mandates = data.data.active;
    //         }

    //         badges.update({'_id': item._id}, {$set: {mandates: mandates}}, {safe:true}, function(err) {
    //               if (err) console.warn(err.message);
    //               else console.log('successfully updated',item.id,item.name);
    //               callback(null);
    //           });
            

    //       });

          
    //     }, function(err){
    //       console.log("Error",err);
    //     });

    //   });


    /* get mandates iterate offset */
      // badges
      //   .find({ "mandates.hasMore" : true})
      //   .toArray(function(err, data) {
                
      //     async.eachSeries(data, function(item,callback){
      //       getUrlApi(item.mandates.getMoreUrl, function(api){
      //         //console.log(mandates.mandates);

      //         api.data.active.mandates = api.data.active.mandates.concat(item.mandates.mandates);

      //         badges.update({'_id': item._id}, {$set: {"mandates": api.data.active}}, {safe:true}, function(err) {
      //               if (err) console.warn(err.message);
      //               else console.log('successfully updated',item.id,item.name);
      //               callback(null);
      //           });
              

      //       });

            
      //     }, function(err){
      //       console.log("Error",err);
      //       db.close();
      //     });

      //   });


        /* make madates table */
        // badges
        //   .find({ "mandates" : {"$ne":null}})
        //   .toArray(function(err, data) {
        //     //console.log(data);
        //     async.eachSeries(data, function(item,callback){

        //       //console.log(item.name,item.mandates.active.mandates);

        //       item.mandates.mandates.forEach(function(mandate){
        //         var tmp = {
        //           name: mandate.subjectName,
        //           id: mandate.subjectId,
        //           status: mandate.subjectStatus,
        //           role: mandate.mandateRole[0],
        //           badge_id:item.id
        //         };
        //         console.log(tmp);
        //         mandateDB.insert(tmp, function(err, docs) { });
        //       })



        //       callback();
              
        //     }, function(err){
        //       console.log("Error",err);
        //       db.close();
        //     });

        // });

        /* create firmen DB */
        // mandateDB
        //   .find({})
        //   .toArray(function(err, data) {
        //     //console.log(data);
        //     async.eachSeries(data, function(item,callback){
              
        //       firmenDB.find({ "_id" : item.id }).toArray(function(err, data) {
        //         if(data.length==0){
        //           console.log(item.id);
        //           firmenDB.insert({ _id : item.id }, function(err,docs){});
        //         }
                
        //         callback(null);
        //       });
              
              
        //     }, function(err){
        //       console.log("Error",err);
        //       db.close();
        //     });

        // });
        
        /* fill company details */
        // firmenDB
        //   .find({ "UID" : null })
        //   .toArray(function(err, data) {
        //     //console.log(data);
        //     async.eachSeries(data, function(item,callback){

        //       getApi("company/"+item._id, function(data){

        //         console.log(data.status);
        //         firmenDB.update({'_id': item._id}, {$set: data.data.company}, {safe:true}, function(err) {
        //               if (err) console.warn(err.message);
        //               else console.log('successfully updated',item._id);
        //               callback(null);
        //           });
                

        //       });
              
        //     }, function(err){
        //       console.log("Error",err);
        //       db.close();
        //     });

        // });

        /* insert noga into mandate  */
        mandateDB
          .find({})
          .toArray(function(err, data) {
            //console.log(data);
            async.eachSeries(data, function(item,callback){

              console.log(item.id);
              firmenDB
                .find({"_id": item.id})
                .toArray(function(err, data) {

                  console.log(data.length)
                  var noga = data[0].industry_name;
                  var nogaCode = data[0].nogaCode;
                  console.log(nogaCode,noga);
                  mandateDB.update({'_id': item._id}, {$set: {noga:noga, nogaCode: nogaCode}}, {safe:true}, function(err) {
                        if (err) console.warn(err.message);
                        else console.log('successfully updated',item._id);
                        callback(err);
                    });
                
              });
              
            }, function(err){
              console.log("Error",err);
              db.close();
            });

        });

        
        /* get the fuckin noga zur funktion */
        // badges
        //   .find({ "deklarierte_funktion" : {"$ne":"" }})
        //   .toArray(function(err, data) {
        //     //console.log(data);
        //     async.eachSeries(data, function(item,callback){

        //       getApi("search/company/"+item.deklarierte_funktion, function(data){

        //         console.log(data);
        //         callback(null);                

        //       });
              
        //     }, function(err){
        //       console.log("Error",err);
        //       db.close();
        //     });

        // });
    
    // fill noga codes für die firmen
    // var getNogaCode = function(search,callback){
    //   nogaDB.find({ "Titles" : {"$regex" : search} })
    //     .toArray(function(err, data) {
    //       //console.log(data);

    //       var nogaCode = null;
    //       if(data.length!=0){
    //         nogaCode = data[0]['Sections'];
    //       }

    //       callback(nogaCode);
    //     });
    // }

    // firmenDB
    //   .find({ "nogaCode" : null })
    //   .toArray(function(err, data) {
    //     async.eachSeries(data, function(item,callback){
    //       getNogaCode(item.industry_name,function(code){

    //         console.log(item.industry_name,code);
    //         firmenDB.update({'_id': item._id}, {$set: {nogaCode: code }}, {safe:true}, function(err) {
    //               if (err) console.warn(err.message);
    //               else console.log('successfully updated',item._id);
    //               callback(null);
    //           });
          
    //       });
          
    //     }, function(err){
    //       console.log("Error",err);
    //       db.close();
    //     });

    // });


    var getNoga = function(item, callback){
      console.log(item.badgegeber_id);

      async.eachSeries(item.mandatesActive, function(mandate, callback){

        console.log(firmen,mandate.subjectId);
        //callback(null);

      }, function(err){
        callback(err);
      });

      
    }
});


var getApi = function(query,callback){
  console.log("query", query);
  request.post("https://infocube.ch/en/rest/v1.4/"+query, {form: { access_token :"807d3e289938eb54c49841bb70673014"}}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body));
    } else {
      console.log("error", error,response);
    }
  });
}

var getUrlApi = function(url,callback){
  console.log("url", url);
  request.post(url, {form: { access_token :"807d3e289938eb54c49841bb70673014"}}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body));
    } else {
      console.log("error", error,response);
    }
  });
}
