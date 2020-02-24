'use strict';

function repeatedWord(string) {
  const arr = string.split(' ');
  const hash = new Map();
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (hash.get(arr[i]) === undefined) {
      hash.set(arr[i].toLowerCase(), true);
    } else if (hash.get(arr[i]) === true) {
      result.push(arr[i]);

    
      return result;
    }
  }
}

module.exports = repeatedWord;