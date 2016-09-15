'use strict';

const program = require('../lib/main.js');
const assert = require('assert');

describe('module main', function(){
  describe('testing #program()', function(){
    it('should match the correct position in array', function(done){
      program(function(text){
        assert.equal(text[0], '4920616d20696e20', 'first value is not matching');
        assert.equal(text[1], '57656c636f6d6520', 'second value is not matching');
        assert.equal(text[2], '5468697320697320', 'third value is not matching');
        done();
      });
    });
  });
});
