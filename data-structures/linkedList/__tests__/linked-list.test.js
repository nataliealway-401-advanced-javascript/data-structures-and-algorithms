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