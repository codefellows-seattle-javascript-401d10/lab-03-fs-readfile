'use strict';

const fs = require('fs');

module.exports = function readDataFiles(callback) {
  var resultArray = [];
  fs.readFile(`${__dirname}/../data/one.txt`, function(err, data){
    resultArray.push(data.toString('hex', 0, 8));
    fs.readFile(`${__dirname}/../data/two.txt`, function(err, data){
      resultArray.push(data.toString('hex', 0, 8));
      fs.readFile(`${__dirname}/../data/three.txt`, function(err, data){
        resultArray.push(data.toString('hex', 0, 8));
        callback(resultArray);
      });
    });
  });
};
