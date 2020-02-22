'use strict';

const { Hashmap } = require('../hashTable.js');
let hash = new Hashmap;
hash.add('thing1', 18);
hash.add('thing2', 19);
hash.add('thing3', 20);
hash.add('thing4', 21);
hash.add('thing5', 22);
hash.add('thing6', 23);

describe('Hashtable testing', () => {

  describe('Hash Table testing', () => {
    it('Adding a key/value to your hashtable results in the value being in the datastructure', () => {
      let result = hash.contains('thing1');
      expect(result).toBeTruthy();
    });
    it('Retrieving based on key returns value stored', () => {
      let result = hash.get('thing1');
      expect(result).toBe(18);
    });
    it('Returns null if key doesn\'t exist', () => {
      let HashTable = new Hashmap(5);
      HashTable.add('key', 'value');
      expect(HashTable.get('abcde')).toBe(null);
    });
    it('Handles a collision successfully', () => {
      let result = hash.contains('thing3');
      expect(result).toBeTruthy();
    });
    it('Retrieve a value from a bucket that has a collision', () => {
      let result = hash.get('thing3');
      expect(result).toBe(20);
    });
    it('Succesfully hash a key to an in-range value', () => {
      let result = hash.hash('thing3');
      expect(result).toBe(1);
    });
  });
});