'use strict';


const fs = require('fs');

const readFileHelper = module.exports = function(callback){
  var resultArray = [];
  fs.readFile(`${__dirname}/one.txt`, function(err, buf){
    if (err) throw err;
    var data = buf.toString('hex', 0, 8);
    resultArray.push(data);
    fs.readFile(`${__dirname}/two.txt`, function(err, buf){
      if (err) throw err;
      var data = buf.toString('hex', 0, 8);
      resultArray.push(data);
      fs.readFile(`${__dirname}/three.txt`, function(err, buf){
        if (err) throw err;
        var data = buf.toString('hex', 0, 8);
        resultArray.push(data);
        callback(data);
      });
    });
  });
};
