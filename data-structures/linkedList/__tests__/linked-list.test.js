'use strict';

const LinkedList = require('../linked-list.js');

// * Can successfully instantiate an empty linked list
describe('instantiate an empty linked list', ()=>{
  let list = new LinkedList();
  it('empty list',() => {
    expect(list).toBeTruthy();
  });
});


// * Can properly insert into the linked list
describe('insert into the linked list', ()=>{
  let list = new LinkedList();
  list.insert('yellow');

  it('successfully inserts into list', ()=>{
    expect(list.head.value).toBe('yellow');

  });
});

//*The head property will properly point to the first node in the linked list
describe('head property will properly point to the first node in the linked list', () => {
  let list = new LinkedList();
  list.insert('Natalie');
  list.insert('Aaron');

  it('first node is correct', () => {
    expect(list.head.value).toBe('Aaron');
  });
});

//* Can properly insert multiple nodes into the linked list
describe('Can properly insert multiple nodes into the linked list', () => {
  let list = new LinkedList();
  list.insert('Natalie');
  list.insert('Aaron');

  it('succesfully added first value', () => {
    expect(list.head.value).toBe('Aaron');
  });
  it('succesfully added second value', () => {
    expect(list.head.next.value).toBe('Natalie');
  });
});

// Will return true when finding a value within the linked list that exists
describe('Will return true when finding a value within the linked list that exists', () => {
  let list = new LinkedList();
  list.insert('Natalie');
  list.insert('Aaron');
  let searchResult = list.includes('Natalie');
  let badSearchResult = list.includes('bonJovi');

  //  Will return true when finding a value within the linked list that exists
  it('Returns true for items that exist', ()=>{
    expect(searchResult).toBeTruthy();
  });
  // * Will return false when searching for a value in the linked list that does not exist
  it('Returns false for items that do not exist', ()=>{
    expect(badSearchResult).toBeFalsy();
  });
});

// * Can properly return a collection of all the values that exist in the linked list
describe('Can properly return a collection of all the values that exist in the linked list', ()=>{
  let list = new LinkedList();
  list.insert('item1');
  list.insert('item2');
  list.insert('item3');
  it('returns a collection', () => {
    expect(list.toString()).toEqual('head -> item3 -> item2 -> item1 -> NULL');
  });

});




// ____________________ LL-INSERTIONS TESTS _______________________________
 
describe('Can successfully add a node to the end of the linked list', () => {
  let list = new LinkedList();
  list.insert('1');
  list.append('2');
  it('should add items to the end of the list', () => {
    expect(list.head.next.value).toBe('2');
  });

  describe('Can succesfully add multiple nodes to the end of a list', () => {
    let list = new LinkedList();
    list.insert('1');
    list.append('2');
    list.append('5');
    it('Can add multiple nodes to the end of a list', () => {
      expect(list.head.next.next.value).toBe('5');
    });
  });
});

describe('Can successfully insert a node before a node located i the middle of a linked list', () => {
  let list = new LinkedList();
  list.insert('red');
  list.insert('yellow');
  list.insert('purple');
  list.insert('blue');
  list.insertBefore('yellow', 'pink');
  it('inserts a node in the middle', () => {
    expect(list.head.next.next.value).toBe('pink');
  });
});

describe('Can successfully insert a node before the first node in the list', () => { 
  it('inserts a node before the first node in the list', () => {
    let list = new LinkedList();
    list.insert('strawberry');
    list.insert('blueberry');
    list.insert('banana');
    list.insertBefore('banana', 'apple');
    expect(list.head.value).toEqual('apple');
  });
  
  describe('Can successfully insert a node in the middle of the linked list', () => { 
    it('inserts a node in the middle of the linked list', () => {
      let list = new LinkedList();
      list.insert('steak');
      list.insert('chicken');
      list.insert('fish');
      list.insert('beef');
      list.insertAfter('fish', 'tofu');
      expect(list.head.next.next.value).toEqual('tofu');
      expect(list.head.next.next.next.value).toEqual('chicken');
    });
  });

  describe('Can successfully insert a node after the last node in the list', () => { 
    it('Can successfully insert a node after the last node in the list', () => {
      let list = new LinkedList();
      list.insert('californiaRoll');
      list.insert('unagi');
      list.insert('spicyTuna');
      list.insertAfter('californiaRoll', 'shrimp');
      expect(list.head.next.next.next.value).toEqual('shrimp');
    });
  });
});


// ____________________ KTH FROM THE END TESTS _______________________________

describe('Testing Kth from the end of a linked list,', () => {
  const list = new LinkedList();

  list.insert('1');
  list.insert('2');
  list.insert('3');
  list.insert('4');
  list.insert('5');

  it('Should return exception when k is greater then the length of the linked list', () => {
    expect(list.kthFromTheEnd('6')).toBe('Exception');
    expect(list.kthFromTheEnd('87')).toBe('Exception');
  });

  it('Should return Exception Wwhen k and the length of the list are the same', () => {
    expect(list.kthFromTheEnd('5')).toBe('Exception');
  });

  it('Should return Exception when k is not a positive integer', () => {
    expect(list.kthFromTheEnd('-4')).toBe('Exception');
  });

  const singleList = new LinkedList();
  singleList.insert = ('1');

  it('Should return an exception when the linked list contains one and k is 0', () => {
    expect(singleList.kthFromTheEnd(0)).toBe('Exception');
  });

  it('Should return an exception when the list contain one node and k is greater then 1', () => {
    expect(singleList.kthFromTheEnd('5')).toBe('Exception');
  });

});


