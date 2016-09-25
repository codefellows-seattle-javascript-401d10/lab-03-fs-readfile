'use strict';

const readDataFiles = require('./lib/readfiles');

readDataFiles(function(resultArray){
  console.log('Final String:', resultArray);
});
