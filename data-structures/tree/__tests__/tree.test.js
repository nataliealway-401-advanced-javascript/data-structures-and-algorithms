
'use strict';

const BST = require('../tree.js');

describe('Binary Trees', () => {
  const bst = new BST();
  it('Can successfully instantiate an empty tree', ()=> {
    expect(bst).toBeDefined();
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const bst = new BST(10);

    expect(bst.root.value).toBe(10);
  });

  it(' Can successfully add a left child to a single root node on a Binary Search Tree', () => {
    const bst = new BST(10);
    bst.add(3);

    expect(bst.root.left.value).toBe(3);
  });

  it(' Can successfully add a right child to a single root node on a Binary Search Tree', () => {
    const bst = new BST(10);
    bst.add(3);
    bst.add(25);

    expect(bst.root.right.value).toBe(25);
  });

  describe('In-order traversal', () => {
    const test = new BST(100);
    test.add(50);
    test.add(25);
    test.add(75);
    test.add(155);
    test.add(205);
    it('Can successfully return a collection from an in-order traversal', () => { 
      expect(test.inOrder()).toEqual([25, 50, 75, 100, 155, 205]);
    });
  });

  describe('Pre-Order traversal', () => {
    const test = new BST(100);
    test.add(50);
    test.add(25);
    test.add(75);
    test.add(155);
    test.add(205);
    it('Can successfully return a collection from a pre-order traversal', () => {
      expect(test.preOrder()).toEqual([100, 50, 25, 75, 155, 205]);
    });
  });

  describe('Post-Order Traversal', () => {
    const test = new BST(100);
    test.add(50);
    test.add(25);
    test.add(75);
    test.add(155);
    test.add(205);
    it('Can successfully return a collection from a post-order traversal', () => {
      expect(test.postOrder()).toEqual([25, 75, 50, 205, 155, 100]);
    });
  });
});