'use strict';

// node modules
const fs = require('fs');
// npm modules
// app modules
// module constants
// module logic

module.exports = function readDataFiles(callback) {
  var resultArray = [];
  // process.nextTick(orderFiles);
  fs.readFile(`${__dirname}/../data/one.txt`, function(err, data){
    resultArray.push(data.toString('hex', 0, 7));
    // console.log('one', resultArray);
    fs.readFile(`${__dirname}/../data/two.txt`, function(err, data){
      resultArray.push(data.toString('hex', 0, 7));
      // console.log('two', resultArray);
      fs.readFile(`${__dirname}/../data/three.txt`, function(err, data){
        resultArray.push(data.toString('hex', 0, 7));
        // console.log('three', resultArray);
        callback(resultArray);
      });
    });
  });
};
