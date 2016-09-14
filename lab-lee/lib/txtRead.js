'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.txtRead = function() {
  fs.readFile(`${__dirname}/data/1.txt`, function(err, data) {
    console.log(data.toString('hex', 0, 8));
  });
  fs.readFile(`${__dirname}/data/2.txt`, function(err, data) {
    console.log(data.toString('hex', 0, 8));
  });
  fs.readFile(`${__dirname}/data/3.txt`, function(err, data) {
    console.log(data.toString('hex', 0, 8));
  });
};
