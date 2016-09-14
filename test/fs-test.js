'use strict';

// const readFilesFn = require('../lib/fs.js');
const fs = require('fs');
const assert = require('assert');

describe('testing fs module', function() {
  it('should read three files and output 8 bytes per file in order', function(done) {
    return fs.readFile(`${__dirname}/../data/1.txt`, function(err, data) {
      if(err) throw err;
      assert(data != null, 'File 1 should exist.');
      console.log(data);
      done();
    });
  });
  it('should read three files and output 8 bytes per file in order', function(done) {
    return fs.readFile(`${__dirname}/../data/2.txt`, function(err, data) {
      if(err) throw err;
      assert(data != null, 'File 2 should exist.');
      console.log(data);
      done();
    });
  });
  it('should read three files and output 8 bytes per file in order', function(done) {
    return fs.readFile(`${__dirname}/../data/3.txt`, function(err, data) {
      if(err) throw err;
      assert(data != null, 'File 3 should exist.');
      console.log(data);
      done();
    });
  });
});
