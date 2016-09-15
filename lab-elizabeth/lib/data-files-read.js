'use strict';

const fs = require('fs');
const testBuf = new Buffer(24);

module.exports = function(callback){
  fs.readFile(`${__dirname}/../data/one.txt`, function(err, buf1){
    if(err) throw err;
    buf1.copy(testBuf, 0, 0, 8);
    fs.readFile(`${__dirname}/../data/two.txt`, function(err, buf2){
      if(err) throw err;
      buf2.copy(testBuf, 9, 0, 8);
      fs.readFile(`${__dirname}/../data/three.txt`, function(err, buf3){
        if(err) throw err;
        buf3.copy(testBuf, 17, 0, 8);
        var data = testBuf.toString('hex');
        callback(data);
      });
    });
  });
};
