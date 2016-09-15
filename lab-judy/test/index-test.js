'use strict';


const readfilehelper = require('../lib/readfilehelper');
const assert = require('assert');
const callBackArray = readfilehelper.callbackHexStringsArray;

describe('testing index', function(){
  var indexTestStringArray = [];
  //testing one.text
  describe('testing #readOneText()', function(){
    it ('should return 11111111', function(done){
      readfilehelper.readOneText(function(hexString){
        console.log(hexString, 'at line 13');
        indexTestStringArray.push(hexString);
        assert.equal(hexString, '11111111', 'did not get expected result');
        done();
      });
    });
  });
  //testing two.text
  describe('testing #readTwoText()', function(){
    it('should return 22222222', function(done){
      readfilehelper.readTwoText(function(hexString){
        console.log(hexString);
        indexTestStringArray.push(hexString);
        assert.equal(hexString, '22222222', 'did not get expected result 22222222');
        done();
      });
    });
  });
  //testing three.text
  describe('testing #readThreeText()', function(){
    it('should return 1234567', function(done){
      readfilehelper.readThreeText(function(hexString){
        console.log(hexString);
        indexTestStringArray.push(hexString);
        assert.equal(hexString, 1234567, 'did not get expected result 1234567');

        //testing if two arrays match
        describe('testing to see if data in indexTestStringArray matches the callBackArray that was populated in readfilehelper.js', function(){
          it(',should assert if the array elements match ', function(){
            assert.equal(indexTestStringArray.join, callBackArray.join, 'arrays dont match');
          });
        });
        done();
      });
    });
  });
});
