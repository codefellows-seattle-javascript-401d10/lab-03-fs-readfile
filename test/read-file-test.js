'use strict';

const readFileHelper = require('../lib/read-file.js');
const assert = require('assert');

describe('testing readFileHelper', function() {
  it('should return expected string', function(done){
    readFileHelper(function(text){
      assert.equal(text[0], '6c756c7761743a31');
      assert.equal(text[1], '6c756c7761743a32');
      assert.equal(text[2], '6c756c7761743a33');
      done();
    });
  });
});
