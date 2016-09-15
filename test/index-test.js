'use strict';

const readFileHelper = require('../lib/filesystem.js');
const assert = require('assert');

describe('Testing readFileHelper module', function(){
  it('Should return 8 bytes in hex from each file', function(done){
    readFileHelper(function(text){
      assert.equal(text[0], '6c756c7761743a31');
      assert.equal(text[1], '6c756c7761743a32');
      assert.equal(text[2], '6c756c7761743a33');
      done();
    });
  });
});
