'use strict';

const dataFilesRead = require(`${__dirname}/../lib/data-files-read.js`);
const assert = require('assert');

describe('determining load order and data is correct', function(){
  it('verifies load-order', function(done){
    dataFilesRead(function(array){
      assert.equal(array, ['one.txt', 'two.txt', 'three.txt'], 'expected array of one, two, three');
      done();
    });
  });
  it('checks the data', function(done){
    dataFilesRead(function(array, text){
      assert.equal(text, '42726f776e20636104426c656768626c654c69636b20706c', 'expected hex output for one, two, three.txt');
      done();
    });
  });
});
