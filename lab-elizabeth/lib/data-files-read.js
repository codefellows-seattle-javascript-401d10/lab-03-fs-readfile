'use strict';

const fs = require('fs');

module.exports = function(callback){
  const testBuf = new Buffer(24);
  const loadOrderArray = [];
  fs.readFile(`${__dirname}/../data/one.txt`, function(err, buf1){
    if(err) throw err;
    loadOrderArray.push('one.txt');
    buf1.copy(testBuf, 0, 0, 8);
    fs.readFile(`${__dirname}/../data/two.txt`, function(err, buf2){
      if(err) throw err;
      loadOrderArray.push('two.txt');
      buf2.copy(testBuf, 9, 0, 8);
      fs.readFile(`${__dirname}/../data/three.txt`, function(err, buf3){
        if(err) throw err;
        buf3.copy(testBuf, 17, 0, 8);
        loadOrderArray.push('three.txt');
        var hexText = testBuf.toString('hex');
        callback(loadOrderArray, hexText);
      });
    });
  });
};
