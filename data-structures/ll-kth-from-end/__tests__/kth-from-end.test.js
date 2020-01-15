'use strict';

const LinkedList = require('../../linkedList/linked-list');

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