'use strict';

const  HashTable  = require('../../../data-structures/hash-tables/hashTable.js');
const leftJoin = require('../left-join.js');

let hash1 = new HashTable(1);
let hash2 = new HashTable(10);




describe('left join testing', () => {
  it('Hash tables are both empty', () => {
    let result = leftJoin(hash1, hash2);
    expect(result).toMatchObject([]);
  });
});