'use strict';

const fs = require('fs');

var hexArray = [];

module.exports = function(callback) {
  fs.readFile(`${__dirname}/../data/1.txt`, function(err, data) {
    if(err) throw new Error('1.txt not read right.');
    hexArray.push(data.toString('hex', 0, 8));
    fs.readFile(`${__dirname}/../data/2.txt`, function(err, data) {
      if(err) throw new Error('2.txt not read right.');
      hexArray.push(data.toString('hex', 0, 8));
      fs.readFile(`${__dirname}/../data/3.txt`, function(err, data) {
        if(err) throw new Error('3.txt not read right.');
        hexArray.push(data.toString('hex', 0, 8));
        callback(hexArray);
      });
    });
  });
};
