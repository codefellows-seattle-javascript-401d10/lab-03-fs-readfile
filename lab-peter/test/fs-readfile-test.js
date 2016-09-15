'use strict';

const readFile = require('../lib/readfile');
const assert = require('assert');

describe('testing index', function() {
  describe('#readFile()', function() {
    it ('should read one.txt two.txt three.txt', function(done) {
      readFile(function(myArray) {
        assert.equal(myArray.join(),['52616e646f6d2074','536f6d6520616464','46696e616c6c7920']); //text is your myArray
        done();
      });
    });
  });
});
