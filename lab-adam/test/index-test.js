'use strict';

const app = require('../index.js');
const assert = require('assert');
const text = ['4f6e652120546869','54776f212053686f','5468726565212054'];

describe('testing readFile function', function(){
  it('should return the first string', function() {
    return app.p1.then(function(data){
      assert.equal(data,text[0],'the first string was not identical');
    });
  });

  it('should return the second string', function() {
    return app.p2.then(function(data){
      assert.equal(data,text[1],'the second string was not identical');
    });
  });

  it('should return the third string', function() {
    return app.p3.then(function(data){
      assert.equal(data,text[2],'the third string was not identical');
    });
  });
});
