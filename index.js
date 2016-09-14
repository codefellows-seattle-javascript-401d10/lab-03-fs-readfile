'use strict';

const fs = require('fs');
const filesToRead = [`${__dirname}/data/1.txt`, `${__dirname}/data/2.txt`, `${__dirname}/data/3.txt`];
// console.log(filesToRead);

module.exports = function readFiles() {
  filesToRead.forEach(function(file) {
    fs.readFile(file, function(err,data) {
      if (err) throw err;
      return data.toString('utf8', 0, 8);
    });
  });
};
