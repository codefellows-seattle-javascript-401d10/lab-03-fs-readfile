'use strict';


const fs = require('fs');

module.exports = function(callback){
  var resultArray = [];
  fs.readFile(`${__dirname}/one.txt`, function(err, data){
    if (err) throw err;
    data.toString('hex', 0, 8);
    resultArray.push(data.toString('hex', 0, 8));
    fs.readFile(`${__dirname}/two.txt`, function(err, data){
      if (err) throw err;
      data.toString('hex', 0, 8);
      resultArray.push(data.toString('hex', 0, 8));
      fs.readFile(`${__dirname}/three.txt`, function(err, data){
        if (err) throw err;
        data.toString('hex', 0, 8);
        resultArray.push(data.toString('hex', 0, 8));
        callback(resultArray);
      });
    });
  });
};
