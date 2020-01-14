'use strict';

const LinkedList = require('../ll-insertions.js');

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











