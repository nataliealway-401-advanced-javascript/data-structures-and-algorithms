'use strict';


/**
 * @function FizzOrBuzz
 * @param {*} value
 * @returns string
 */
function fizzOrBuzz(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    return 'FizzBuzz';
  } else if (value % 5 === 0) {
    return 'Buzz';
  } else if (value % 3 === 0) {
    return 'Fizz';
  } 
}
/** 
 * @function fizzBuzzTree
 * @param {*} tree 
 * @returns tree
 */
function fizzBuzzTree(tree) {
  if (!tree) {
    return 'No tree value';
  }
  let recursive = node => {
    if (node.left) recursive(node.left);
    node.value = fizzOrBuzz(node.value);
    if (node.right) recursive(node.right);
  };
  recursive(tree.tree.root);
  return tree;
}

module.exports = fizzBuzzTree;
