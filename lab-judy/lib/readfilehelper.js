'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.readOneText = readOneText;
exports.readTwoText = readTwoText;
exports.readThreeText = readThreeText;

exports.callbackHexStringsArray = [];

function readOneText(callback){
  fs.readFile(`${__dirname}/../data/one.txt`, (err, data) => {
    if (err) throw err;
    callback(data.toString('utf8', 0, 8));
    exports.callbackHexStringsArray.push(data.toString('utf8', 0, 8));
  });
}


function readTwoText(callback) {
  fs.readFile(`${__dirname}/../data/two.txt`, (err, data) => {
    if (err) throw err;
    callback(data.toString('utf8', 0, 8));
    exports.callbackHexStringsArray.push(data.toString('utf8', 0, 8));
  });
}

function readThreeText(callback){
  fs.readFile(`${__dirname}/../data/three.txt`, (err, data) => {
    if (err) throw err;
    exports.callbackHexStringsArray.push(data.toString('utf8', 0, 8));
    callback(data.toString('utf8', 0, 8));
  });
}
