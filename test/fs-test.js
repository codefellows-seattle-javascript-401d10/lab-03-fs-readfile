'use strict';

const readFileHelper = require('../lib/fs.js');
const assert = require('assert');

describe('testing readFileHelper', function() {
  it('should return expected string', function(done){
    readFileHelper(function(text){
      assert.equal(text, 'lulwat:3 22336\n');
      done();
    });
  });
});
