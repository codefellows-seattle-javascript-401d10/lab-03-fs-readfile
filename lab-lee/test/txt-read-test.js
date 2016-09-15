'use strict';

const txtRead = require('../lib/txtRead.js');
const assert = require('assert');

describe('#txtRead()', function() {
  it('should return hex value for 1.txt', function(done){
    txtRead(function(printIt){
      let result = printIt[0];
      assert.ok(result === '54657874206f6e65', 'was not the right txts');
      done();
    });
  });
  it('should return hex value for 2.txt', function(done){
    txtRead(function(printIt){
      let result = printIt[1];
      assert.ok(result === '4f74686572207374', 'was not the right txts');
      done();
    });
  });
  it('should return hex value for 2.txt', function(done){
    txtRead(function(printIt){
      let result = printIt[2];
      assert.ok(result === '5465787420746872', 'was not the right txts');
      done();
    });
  });
});
