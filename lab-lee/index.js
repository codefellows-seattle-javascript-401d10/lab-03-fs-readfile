'use strict';

const txtRead = require('./lib/txtRead');

txtRead(printIt);

function printIt(data) {
  data.forEach(function(x){
    console.log(x);
  });
}
