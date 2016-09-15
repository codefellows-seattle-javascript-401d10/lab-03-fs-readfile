'use strict';

const readFileHelper = require('../lib/fs-files.js');
const assert = require('assert');

describe('Asynchronous Testing', function() {
    it('Testing file output in order', function(done) {
        readFileHelper(function(text){
           assert.equal(text[0],'52617a697965683a');
           assert.equal(text[1],'52617a697965683a');
           assert.equal(text[2],'52617a697965683a');
           done(); 
        });
    });
});