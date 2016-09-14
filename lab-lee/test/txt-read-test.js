'use strict';

const txtRead = require('../lib/txtRead.js');
const assert = require('assert');

describe('txtRead', function() {
  describe('#txtRead()', function() {
    it('should return txt1hex txt2hex txt3hex', function() {
      let result = txtRead.txtRead();
      assert.ok(result ===
        'txt1hex' +
        'txt2hex' +
        'txt3hex',
        'was not the right txts');
    });
  });
});
