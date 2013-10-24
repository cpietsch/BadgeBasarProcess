var csv = require('csv');
var fs = require('fs');

// csv()
// .from(fs.createReadStream('../data/politiker-nzz.csv'))
// .to.array( function(geschlecht){
//   console.log(geschlecht[0]);

//   csv()
//   .from(fs.createReadStream('../data/politiker-sqlite.csv'))
//   .transform( function(row,index){
//     //console.log(row[0],geschlecht[index][0])
//     row.push(geschlecht[index][4])
//     return row;
//   })
//   .to.path('../data/politiker-geschlecht.csv');
// });

