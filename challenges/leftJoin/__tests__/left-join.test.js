'use strict';

const { Hashmap } = require('../../../data-structures/hash-tables/hashTable.js');
const leftJoin = require('../left-join');

describe('Left\'s Join ', () => {
  let hashTable1 = new Hashmap;
  let hashTable2 = new Hashmap;


  beforeAll(() => {

    hashTable1.add('fond','enamored');
    hashTable1.add('wrath','anger');
    hashTable1.add('deligent', 'employed');
    hashTable1.add('outfit', 'garb');
    hashTable1.add('guide', 'usher');

    hashTable2.add('fond','averse');
    hashTable2.add('wrath','delight');
    hashTable2.add('deligent', 'idle');
    hashTable2.add('guide', 'follow');
    hashTable2.add('flow', 'jam');
  });

  it('should populate my hashtable content', () => {
    let resultLeft = hashTable1.get('fond');
    let resultRight = hashTable2.get('outfit');
    expect(resultLeft).toEqual('enamored');
    expect(resultRight).toBeNull();
  });

  it('should return the left join of two hashtables', () => {
    let result = leftJoin(hashTable1, hashTable2);

    expect(result).toStrictEqual( [ [ 'wrath', 'anger', 'delight' ],
      [ 'deligent', 'employed', 'idle' ],
      [ 'fond', 'enamored', 'averse' ],
      [ 'outfit', 'garb', null ],
      [ 'guide', 'usher', 'follow' ] ]);
  });

});