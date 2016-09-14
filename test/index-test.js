'use strict';

const readFileHelper = require('../lib/index.js');
const assert = require('assert');

describe('Testing readFileHelper module', function(){
  it('Should return 8 bytes in hex from each file', function(done){
    readFileHelper(function(text){
      assert.equal(text, '6c756c7761743a33');
      done();
    });
  });
});
