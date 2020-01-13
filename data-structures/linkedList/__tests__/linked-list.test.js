'use strict';

const LinkedList = require('../linked-list.js')

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
