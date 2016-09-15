'use strict';

// node modules
// const fs = require('fs');
const readDataFiles = require('../lib/readFiles');
const assert = require('assert');
// npm modules
// app modules
// module constants
// module logic

describe('readDataFiles test', function(){
  it('Items in resultsArray should match to their expected index positions', function(done){
    readDataFiles(function(text){
      assert.equal(text[0], '4c6f72656d2069', 'resultArray at index[0] is not matching with test; item is out of position or incorrect');
      assert.equal(text[1], '4261636f6e2069', 'resultArray at index[1] is not matching with test; item is out of position or incorrect');
      assert.equal(text[2], '43757063616b65', 'resultArray at index[2] is not matching with test; item is out of position or incorrect');
      done();
    });
  });
});
