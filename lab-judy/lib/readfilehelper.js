'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.readOneText = readOneText;
exports.readTwoText = readTwoText;
exports.readThreeText = readThreeText;

function readOneText(callback){
  fs.readFile('./data/one.txt', (err, data) => {
    if (err) throw err;
    callback(data.toString('utf8', 0, 8));
  });
}


function readTwoText(callback) {
  fs.readFile('./data/two.txt', (err, data) => {
    if (err) throw err;
    callback(data.toString('utf8', 0, 8));
  });
}

function readThreeText(callback){
  fs.readFile('./data/three.txt', (err, data) => {
    if (err) throw err;
    callback(data.toString('utf8', 0, 8));
  });
}
