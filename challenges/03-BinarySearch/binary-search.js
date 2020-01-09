'use strict';

/**
 * @function - Takes an array and value(key) and finds the index of that value
 * @param {Array} arr 
 * @param {*} key 
 */

function binarySearch(arr,key) {
  let left = 0;
  let right = arr.length -1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (key === arr[middle]) {
      return middle;
    }
    if (key < arr[middle]) {
      right = middle - 1;
    }
    if (key > arr[middle]) {
      left = middle + 1;
    }
  }
  return -1;
}

module.exports = binarySearch;

  