'use strict';

const txtRead = require('../lib/txtRead.js');
const assert = require('assert');

describe('txtRead', function() {
  describe('#txtRead()', function() {
    it('should return hex values of 1.txt, 2.txt, 3.txt', function() {
      let result = txtRead.txtRead();
      assert.ok(result ===
        '54657874206f6e65 ' +
        '4f74686572207374 ' +
        '5465787420746872 ',
        'was not the right txts');
    });
  });
});
