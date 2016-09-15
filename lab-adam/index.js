'use strict';

exports = module.exports = {};
const fs = require('fs');
var firstFile = `${__dirname}/assets/one.txt`;
var secondFile = `${__dirname}/assets/two.txt`;
var thirdFile = `${__dirname}/assets/three.txt`;

var resultArray = [];

exports.p1 = new Promise(function(resolve, reject) {
  fs.readFile(firstFile, (err, data) => {
    if (err) reject(err);
    else var firstEight = (data.toString('hex', 0, 8));
    console.log(firstEight);
    resolve(firstEight);
  });
});

exports.p2 = new Promise(function(resolve, reject) {
  fs.readFile(secondFile, (err, data) => {
    if (err) reject(err);
    else var firstEight = (data.toString('hex', 0, 8));
    console.log(firstEight);
    resolve(firstEight);
  });
});

exports.p3 = new Promise(function(resolve, reject) {
  fs.readFile(thirdFile, (err, data) => {
    if (err) reject(err);
    else var firstEight = (data.toString('hex', 0, 8));
    console.log(firstEight);
    resolve(firstEight);
  });
});

exports.parseFiles = function(){
  Promise.all([exports.p1, exports.p2, exports.p3]).then(values => {
    values.forEach(function(i) {
      resultArray.push(i);
    });
  });
};
