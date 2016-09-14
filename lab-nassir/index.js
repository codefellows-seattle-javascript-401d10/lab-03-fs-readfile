'use strict';

// node modules
const fs = require('fs');
// npm modules
// app modules
// module constants
// module logic

fs.readFile(`${__dirname}/data/one.txt`, function(err, data){
  console.log(data.toString('hex', 0, 7));
});
