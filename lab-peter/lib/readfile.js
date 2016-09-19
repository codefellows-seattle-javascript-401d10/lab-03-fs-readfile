'use strict';

const fs = require('fs');

module.exports = exports = {};

var myArray = [];

module.exports = function(callback) {
  fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
    if (err) throw err('text one is wrong');
    myArray.push(data.toString('hex', 0, 8));
    fs.readFile(`${__dirname}/../data/two.txt`, function(err, data) {
      if (err) throw err('text two is wrong');
      myArray.push(data.toString('hex', 0, 8));
      fs.readFile(`${__dirname}/../data/three.txt`, function(err, data) {
        if (err) throw err('text three is wrong');
        myArray.push(data.toString('hex', 0, 8));
        callback(myArray);
      });
    });
  });
};
