'use strict';

const fs = require('fs');

fs.readFile(`${__dirname}/one.txt`, function(err, buf){
  if (err) throw err;
  console.log(buf.toString('hex', 0, 8));
});

fs.readFile(`${__dirname}/two.txt`, function(err, buf){
  if (err) throw err;
  console.log(buf.toString('hex', 0, 8));
});

fs.readFile(`${__dirname}/three.txt`, function(err, buf){
  if (err) throw err;
  console.log(buf.toString('hex', 0, 8));
});
