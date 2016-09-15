'use strict';

// node modules
const readDataFiles = require('./lib/readFiles');
// npm modules
// app modules
// module constants
// module logic

readDataFiles(function(resultArray){
  console.log('Final String:', resultArray);
});
