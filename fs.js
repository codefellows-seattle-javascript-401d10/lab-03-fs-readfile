'use strict';

const fs = require('fs');
const filesToRead = [`${__dirname}/data/1.txt`, `${__dirname}/data/2.txt`, `${__dirname}/data/3.txt`];
// console.log(filesToRead);

const readFiles = module.exports = function() {
  filesToRead.forEach(function(file) {
    fs.readFile(file, function(err,data) {
      if (err) throw err;
      var contents = data.toString('hex', 0, 8);
      console.log(contents);
    });
  });
};

readFiles();
