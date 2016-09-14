'use strict';

const readfilehelper = require('../lib/read-file-helper.js');
const assert = require('assert');

describe('testing readfilehelper()', function(){
  it('should return correct string', function(done){ //tells it that it's done with asychronous tests
    readfilehelper(function(hexArray){
      console.log(hexArray);
      assert.equal(hexArray.join(), ['48','47','6b'].join());
      done();
    });
  });
});
