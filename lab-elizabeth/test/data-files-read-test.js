'use strict';

const dataFilesRead = require(`${__dirname}/../lib/data-files-read.js`);
const assert = require('assert');

describe('determining load order and data is correct', function(){
  it('verifies load-order', function(done){
    dataFilesRead(function(array){
      assert.equal(array[0], 'one.txt', 'expected array[0] to be one.txt');
      assert.equal(array[1], 'two.txt', 'expected array[1] to be two.txt');
      assert.equal(array[2], 'three.txt', 'expected array[2] to be three.txt');
      done();
    });
  });
  it('checks the data', function(done){
    dataFilesRead(function(array, text){
      assert.equal(text, '42726f776e206361426c656768626c654c69636b20706c61', 'expected hex output for one, two, three.txt');
      done();
    });
  });
});
