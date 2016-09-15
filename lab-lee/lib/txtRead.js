'use strict';

const fs = require('fs');

var indexData = [];

module.exports = function(callback) {
  fs.readFile(`${__dirname}/../data/1.txt`, function(err, data) {
    indexData.push(data.toString('hex', 0, 8));
    fs.readFile(`${__dirname}/../data/2.txt`, function(err, data) {
      indexData.push(data.toString('hex', 0, 8));
      fs.readFile(`${__dirname}/../data/3.txt`, function(err, data) {
        indexData.push(data.toString('hex', 0, 8));
        callback(indexData);
      });
    });
  });
};
