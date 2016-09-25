'use strict';

// node modules
// const fs = require('fs');
const readDataFiles = require('../lib/readfiles');
const assert = require('assert');
// npm modules
// app modules
// module constants
// module logic

describe('readDataFiles test', function(){
  it('Items in resultsArray should match to their expected index positions', function(done){
    readDataFiles(function(text){
      assert.equal(text[0], '4c6f72656d2069', 'resultArray at index[0] is not matching with test; item is out of position or incorrect');
      assert.equal(text[1], '4261636f6e2069', 'resultArray at index[1] is not matching with test; item is out of position or incorrect');
      assert.equal(text[2], '43757063616b65', 'resultArray at index[2] is not matching with test; item is out of position or incorrect');
      done();
    });
  });
});

//chai demo from duncan

const expect = require('chai').expect;
const readFiles = require('etc');

describe('describe all tests in block', function(){
  describe('first test, subsequent tests get own describe i think', function(){
    it('should return error', function(){
      readFiles([`${__dirname}/dont-exist.txt`], function(err, data){
        expect(!!err).to.equal(true);
      });
    });
  });
  describe('good paths', function(HERE){
    before((done) => { // this lexical, fatarrow, or arrow function inherits the context of the parent function. so if we use this., it'll inherit the this of the previous function. I've put HERE into the inherited function
      this.paths = [
        'path1',
        'path2',
        'path3',
      ];
      done();
    });
    it('return an error', (done) => { //here again, we're inheriting the context of the HERE function. The this. on the next line also does that.
      readFiles(this.paths, function(err, data){
        expect(err).to.be(null);
        console.log(err);
        done();
      });
    });
  });
});
