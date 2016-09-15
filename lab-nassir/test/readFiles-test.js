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
  it('should discover a particular string in index [0] of text', function(done){
    readDataFiles(function(text){
      assert.equal(text[0], '4c6f72656d2069');
      done();
    });
  });
  it('should discover a particular string in index [1] of text', function(done){
    readDataFiles(function(text){
      assert.equal(text[1], '4261636f6e2069');
      done();
    });
  });
  it('should discover a particular string in index [2] of text', function(done){
    readDataFiles(function(text){
      assert.equal(text[2], '43757063616b65');
      done();
    });
  });
});
