'use strict';

// node modules
const fs = require('fs');
// npm modules
// app modules
// module constants
// module logic

module.exports = function readDataFiles(callback) {
  var resultArray = [];
  fs.readFile(`${__dirname}/../data/one.txt`, function(err, data){
    resultArray.push(data.toString('hex', 0, 7));
    fs.readFile(`${__dirname}/../data/two.txt`, function(err, data){
      resultArray.push(data.toString('hex', 0, 7));
      fs.readFile(`${__dirname}/../data/three.txt`, function(err, data){
        resultArray.push(data.toString('hex', 0, 7));
        callback(resultArray);
      });
    });
  });
};

//new stuff from Duncan's solution.

// const readFiles = module.exports = function(pathArray, callback){
//   var result = [];
//   fs.readFile(pathArray[0], function(err, data){
//     if (err) return callback(err); //return will end the function. This will trigger if pathArray[0] contains no valid data.
//     result.push(etc);
//     //repeat two times
//     callback(null, result);
//   });
// };
//
// readFiles([`${__dirname}/dont-exist.txt`], function(err, data){
//   if (err) {
//     console.error('error found here');
//     console.error(err);
//   }
// });

// old attempt at extracred, failure

// module.exports = function readDataFiles(callback) {
//   var resultArray = [];
//   fs.readdir(`${__dirname}/../data/`, function(err, files) {
//     console.log(files);
//     for (var i = 0; i <= files.length; i++) {
//       if (resultArray.length === files.length) {
//         callback(resultArray);
//         console.log('finally');
//       } else if (resultArray.length < files.length) {
//         fs.readFile(`${__dirname}/../data/${files[i]}`, function(err, data){
//           console.log(data);
//           console.log(data.toString('hex', 0, 7));
//           resultArray.push(data.toString('hex', 0, 7));
//           console.log(resultArray);
//         });
//       }
//     }
//   });
// };
