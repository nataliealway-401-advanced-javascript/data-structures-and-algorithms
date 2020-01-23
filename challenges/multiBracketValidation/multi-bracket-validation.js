'use strict';

let Stack = require('../../data-structures/queueWithStacks/stacks.js');

/**
 * multiBracketValidation
 * @function 
 * @param {string} string 
 * @returns {boolean} 
 */
function multiBracketValidation(string) {
  let stack = new Stack;
  let brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  if(typeof string !== 'string'){
    return undefined;
  }

  for(let i = 0; i < string.length; i++){
    let char = string.charAt(i);
    if (brackets[char]){
      stack.push(brackets[char]);
    } else {
      let last = stack.pop();
      if (string[char] !== brackets[last]) {
        return false;
      }
    }
  }
  if (stack.isEmpty()) {
    return true;
  } else {
    return false;
  }
}


module.exports = multiBracketValidation;