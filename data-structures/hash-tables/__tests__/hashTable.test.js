'use strict';

const { Hashmap } = require('../hashTable.js');

describe('Hashtable testing', () => {
  it('should construct a hash table', () => {
    let hashmap;
    let expectedSize = 25;

    hashmap = new Hashmap(expectedSize);

    expect(hashmap).toBeInstanceOf(Hashmap);
  });
});