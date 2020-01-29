'use strict';

const BinaryTree = require('../../../data-structures/tree/tree.js');
const breadthFirst =require('../breadth-first.js');

describe('Test Breadth-first traversal tree', () => {

  it ('returns null if it recives incorrect parameter', () => {
    let bf = new br();
    Bst.add(null);

    expect(Bst.breadthFirst()).toBe(null);
  });
});