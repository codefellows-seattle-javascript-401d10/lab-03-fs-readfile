'use strict';

const readFunctions = require('../lib/read-file-helper.js');
const assert = require('assert');

describe('testing read-file-helper', function() {
  it('hex codes should console.log in order', function(done) {
    readFunctions(function(hexArray) {
      assert.equal(hexArray.join(), ['4669727374204669', '5365636f6e642046', '5468697264204669'].join());
      done();
    });
  });
});
