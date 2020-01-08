'use strict';

const BinarySearch = require('../binary-search.js');

describe('Testing challenge', () => {
  it('Should return the index of the array that is equal to the search key', () => {
    expect(BinarySearch([2,4,6,8,10,12], 6).toEqual(2));
  });
});