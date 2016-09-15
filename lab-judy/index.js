'use strict';

const readFiles = require('./lib/readfilehelper');

readFiles.readOneText(function(hexString){
  console.log('1: ', hexString);
});

readFiles.readTwoText(function(hexString){
  console.log('2: ',hexString);
});

readFiles.readThreeText(function(hexString){
  console.log('3: ',hexString);
});
