'use strict';


const readfilehelper = require('../lib/readfilehelper');
const assert = require('assert');

describe('testing index', function(){
  var stringArray = [];
  //testing one.text
  describe('testing #readOneText()', function(){
    it ('should return 12345678', function(done){
      let result = readfilehelper.readOneText(function(hexString){
        console.log(hexString);
        stringArray.push(hexString);
        done();
        //test goes here
        assert.equal(result, 12345678, 'did not get expected result 12345678');
      });
    });
  });
  //testing two.text
  describe('testing #readTwoText()', function(){
    it('should return 12345678', function(done){
      let result = readfilehelper.readTwoText(function(hexString){
        console.log(hexString);
        stringArray.push(hexString);
        done();
        //test goes here
        assert.equal(result, 12345678, 'did not get expected result 12345678');
      });
    });
  });
  //testing three.text
  describe('testing #readThreeText()', function(){
    it('should return 1234567', function(done){
      let result = readfilehelper.readThreeText(function(hexString){
        console.log(hexString);
        stringArray.push(hexString);
        done();
        //test goes here
        assert.equal(result, 1234567, 'did not get expected result 1234567');
      });
    });
  });
});
