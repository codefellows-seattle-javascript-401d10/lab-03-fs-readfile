'use strict';

// node modules
const readDataFiles = require('../lib/readfiles');
const assert = require('assert');
// npm modules
// app modules
// module constants
// module logic

describe('readDataFiles test', function(){
  it('Items in resultsArray should match to their expected index positions', function(done){
    readDataFiles(function(text){
      assert.equal(text[0], '4c6f72656d206970', 'resultArray at index[0] is not matching with test; item is out of position or incorrect');
      assert.equal(text[1], '4261636f6e206970', 'resultArray at index[1] is not matching with test; item is out of position or incorrect');
      assert.equal(text[2], '43757063616b6520', 'resultArray at index[2] is not matching with test; item is out of position or incorrect');
      done();
    });
  });
});
