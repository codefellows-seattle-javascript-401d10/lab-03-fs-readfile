'use strict';

const fs = require('fs');

module.exports = exports = {};

var array = [];

module.exports = function(callback){
  fs.readFile(`${__dirname}/../data/one.txt`, function(err, data){
    if(err) throw err;
    array.push(data.toString('hex', 0, 8));
    fs.readFile(`${__dirname}/../data/two.txt`, function(err, data){
      if(err) throw err;
      array.push(data.toString('hex', 0, 8));
      fs.readFile(`${__dirname}/../data/three.txt`, function(err, data){ //all NODE API calls take err, data, in that order.
        if(err) throw err;
        array.push(data.toString('hex', 0, 8));
        console.log('data from line 17', array);
        callback(array);
      });
    });
  });
};
