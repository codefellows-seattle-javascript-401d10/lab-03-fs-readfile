'use strict';

const txtRead = require('../lib/txt-read.js');
const assert = require('assert');

describe('txt-read', function() {
  describe('#txt-read()', function() {
    let result = txtRead.txtRead();
    assert.ok(result ===
      'txt1hex' +
      'txt2hex' +
      'txt3hex',
      'was not the right txts');
  });
});
