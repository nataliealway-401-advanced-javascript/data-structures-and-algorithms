'use strict';

const binarySearch = require('../binary-search.js');

describe('Testing challenge', () => {

  it('Should return the index of the array that is equal to the search key', () => {
    const array = [2,4,6,8,10,12,14,23];
    const key = 14;
    expect(binarySearch(array,key)).toBe(6);

  });
  it('it should return -1 if the search key does not exist', () => {
    expect(binarySearch([1,15,30,44,52,69,78], 90)).toStrictEqual(-1);
  });
});
