'use strict';

const assert = require('assert');
const readFileHelper = require('../lib/read-files.js');

describe('read-files.js', function(){
  it('should read one.txt two.txt three.txt', function(done){
    readFileHelper(function(array){
      assert.equal(array.join(), ['746578742d636861', '7468697320697320', '4865726520697320']);
      done();
    });
  });
});
