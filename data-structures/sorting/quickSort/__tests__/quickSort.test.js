'use strict';

const quickSort = require('../quickSort.js');

describe('Algorithm Quick Sort Testing', () => {
  it('should sort an array', () => {
    let arr = [8,4,23,42,16,15];

    quickSort(arr, 0, arr.length -1);
    expect(arr[0]).toBe(4);
    expect(arr[1]).toBe(8);
    expect(arr[2]).toBe(15);
    expect(arr[3]).toBe(16);
    expect(arr[4]).toBe(23);
    expect(arr[5]).toBe(42);
  });

  it('should sort an array', () => {
    let arr = [5,4,3,2,1];

    quickSort(arr, 0, arr.length -1);
    expect(arr[0]).toBe(1);
    expect(arr[1]).toBe(2);
    expect(arr[2]).toBe(3);
    expect(arr[3]).toBe(4);
    expect(arr[4]).toBe(5);
  });



});


