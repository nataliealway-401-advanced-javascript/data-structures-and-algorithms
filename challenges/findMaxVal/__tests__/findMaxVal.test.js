'use strict';

const Tree = require('../findMaxVal.js');
const Node = require('../node.js');

describe('Find Max Testing', () => {
  it('Should return 11 with example tree provided', () => {
    const tree = new Tree(2);
    tree.root.left = new Node(7);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(6);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(11);
    tree.root.right = new Node(5);
    tree.root.right.right = new Node(9);
    tree.root.right.right.left = new Node(4);
    
    expect(tree.findMax()).toBe(11);
  });

  it('Tree with two instances of the max number (should still return max value', () => {
    const test = new Tree(10);
    test.root.left = new Node(7);
    test.root.left.left = new Node(50);
    test.root.left.right = new Node(6);
    test.root.left.right.left = new Node(5);
    test.root.left.right.right = new Node(11);
    test.root.right = new Node(50);
    test.root.right.right = new Node(9);
    test.root.right.right.left = new Node(4);

    expect(test.findMax()).toBe(50);
  });

  it('Tree with negative and positive values', () => {
    const test = new Tree(10);
    test.root.left = new Node(-7);
    test.root.left.left = new Node(50);
    test.root.left.right = new Node(-6);
    test.root.left.right.left = new Node(5);

    expect(test.findMax()).toBe(50);
  });

  it('Tree with all values the same (should still return max value)', () => {
    const test = new Tree(10);
    test.root.left = new Node(10);
    test.root.left.left = new Node(10);
    test.root.left.right = new Node(10);
    test.root.left.right.left = new Node(10);
    
    expect(test.findMax()).toBe(10);
  });
});


