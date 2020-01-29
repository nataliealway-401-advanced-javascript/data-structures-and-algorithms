  
'use strict';

const BinarySearchTree = require('../../../data-structures/tree/tree.js');
const FBT = require('../fizzBuzzTree.js');

describe('FizzBuzz binary tree testing', ()=> {
  let tree;
  beforeEach(() => {
    tree = new BinarySearchTree();
  });

  xit('Should replace value divisible by 3 to Fizz', () => {
    let fizz = FBT(tree);
    expect(fizz.root.value).toBe('Fizz');
  });

  xit('Should replace value divisible by 5 to Buzz', () => {
    tree.add(10);
    let fizz = FBT(tree);
    expect(fizz.root.right.value).toBe('Buzz');
  });
});