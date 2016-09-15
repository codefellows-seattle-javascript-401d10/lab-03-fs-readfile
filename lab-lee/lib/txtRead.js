'use strict';

const fs = require('fs');

var hexArray = [];

module.exports = function(callback) {
  // fs.readdir(`${__dirname}/../data`, function(err, files) {
  // });
  fs.readFile(`${__dirname}/../data/1.txt`, function(err, data) {
    hexArray.push(data.toString('hex', 0, 8));
    fs.readFile(`${__dirname}/../data/2.txt`, function(err, data) {
      hexArray.push(data.toString('hex', 0, 8));
      fs.readFile(`${__dirname}/../data/3.txt`, function(err, data) {
        hexArray.push(data.toString('hex', 0, 8));
        callback(hexArray);
      });
    });
  });
};

// fs.readdir(`${__dirname}/../data`, function(err, files) {
// });
