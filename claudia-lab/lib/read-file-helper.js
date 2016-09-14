
'use strict';

const fs = require('fs'); //gets built in fs module


module.exports = function(callback) {
  var hexArray = [];
//files have to be read and logged in 1-2-3 order
  fs.readFile(`${__dirname}/../data/one.txt`, function(error,data) {
    if (error) throw error;
    var hex = data.toString('hex', 0, 1);
    hexArray.push(hex);
    fs.readFile(`${__dirname}/../data/two.txt`, function(error,data) {
      if (error) throw error;
      var hex = data.toString('hex', 0, 1);
      hexArray.push(hex);
      fs.readFile(`${__dirname}/../data/three.txt`, function(error,data) {
        if (error) throw error;
        var hex = data.toString('hex', 0, 1);
        hexArray.push(hex);
        callback(hexArray);
      });
    });
  });
};
