'use strict';

const readFileHelper = require('../lib/filesystem.js');
// const assert = require('assert');
//
// describe('Testing readFileHelper module', function(){
//   it('Should return 8 bytes in hex from each file', function(done){
//     readFileHelper(function(text){
//       assert.equal(text[0], '6c756c7761743a31');
//       assert.equal(text[1], '6c756c7761743a32');
//       assert.equal(text[2], '6c756c7761743a33');
//       done();
//     });
//   });
// });

const expect = require('chai').expect;

describe('testing module readFileHelper', function(){
  describe('testing for bad file paths', function(){
    it('should return an error', function(){
      readFileHelper([`${__dirname}/dont-exist.txt`], function(err,data){
        expect(!!err).to.equal(true);
        console.log('data', data);
      });
    });
  });
  describe('testing with good file helper', function(){
    before(() => {
      this.paths = [
        `${__dirname}/../lib/one.txt`,
        `${__dirname}/../lib/two.txt`,
        `${__dirname}/../lib/three.txt`,
      ];
    });

    it('should return proper file paths', (done) => {
      var expectedResult = [ '6c756c7761743a31', '6c756c7761743a32', '6c756c7761743a33' ];
      readFileHelper(this.paths, function(err,data){
        expect(err).to.equal(null);
        expect(data[0]).to.equal(expectedResult[0]);
        expect(data[1]).to.equal(expectedResult[1]);
        expect(data[2]).to.equal(expectedResult[2]);
        console.log('data', data);
        done();
      });
    });
  });
});
