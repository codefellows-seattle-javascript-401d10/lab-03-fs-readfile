'use strict';

const fs = require('fs');


module.exports = function (callback){
  var hexArray = [];
  fs.readFile(`${__dirname}/../data/one.text`, function(err, data){
    if (err) throw err;
    var hex = data.toString('hex', 0, 8);
    hexArray.push(hex);
    fs.readFile(`${__dirname}/../data/two.text`, function(err, data){
      if (err) throw err;
      var hex = data.toString('hex', 0, 8);
      hexArray.push(hex);
      fs.readFile(`${__dirname}/../data/three.text`, function(err, data){
        if (err) throw err;
        var hex = data.toString('hex', 0, 8);
        hexArray.push(hex);
        callback(hexArray);
      });
    });
  });
};
