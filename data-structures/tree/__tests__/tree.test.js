
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
    it('Can successfully return a collection from an in-order traversal', () => { 

    });
  });

  describe('Pre-Order traversal', () => {
    it('Can successfully return a collection from a pre-order traversal', () => {
     
    });
  });

  describe('Post-Order Traversal', () => {
    it('Can successfully return a collection from a post-order traversal', () => {

    });
  });
});