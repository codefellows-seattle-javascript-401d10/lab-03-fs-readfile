'use strict';

const fs = require('fs');

module.exports = function(callback) {
  var filesArray = [];
  fs.readFile(`${__dirname}/../data/1.txt`, function(err, data) {
    if (err) throw err;
    filesArray.push(data.toString('hex', 0, 8));
    fs.readFile(`${__dirname}/../data/2.txt`, function(err, data) {
      if (err) throw err;
      filesArray.push(data.toString('hex', 0, 8));
      fs.readFile(`${__dirname}/../data/3.txt`, function(err, data) {
        if (err) throw err;
        filesArray.push(data.toString('hex', 0, 8));
        callback(filesArray);
      });
    });
  });
};
