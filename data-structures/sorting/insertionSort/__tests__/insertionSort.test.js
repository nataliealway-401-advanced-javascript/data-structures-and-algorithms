'use strict';
const insertionSort = require('../insertionSort.js');

describe('Tests for the insertion sort', ()=>{
  it('should sort an array', ()=>{
    const arr = [8, 4, 23, 42, 16, 15];
    insertionSort(arr);
    expect(arr).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('Reverse-sorted', ()=>{
    const arr = [20,18,12,8,5,-2];
    insertionSort(arr);
    expect(arr).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('Few uniques', ()=>{
    const arr = [5,12,7,5,5,7];
    insertionSort(arr);
    expect(arr).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it('Nearly-sorted', ()=>{
    const arr = [2,3,5,7,13,11];
    insertionSort(arr);
    expect(arr).toEqual([2, 3, 5, 7, 11, 13]);
  });

    

});