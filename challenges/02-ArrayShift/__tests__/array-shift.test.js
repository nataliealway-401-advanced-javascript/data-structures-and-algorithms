'use strict';

const shiftArray = require('../array-shift.js');

describe('Function inserts value into the middle of an array', () => {

  it('Should insert value into center index of the array', () => {
    let array = [1,2,3,5,6,7];
    let value = 4;
    let newArray = shiftArray(array,value);
    expect(newArray[3]).toEqual(4);
  });

  test('Array should be longer by one index', () => {
    let array = [1,2,3];
    let value = 5;
    let newArray = shiftArray(array,value);
    expect(newArray.length).toEqual(4);
  });

  it('Should not replace other current indexes', () => {
    let array = [1,2,3,4,5,6];
    let value = 10;
    let newArray = shiftArray(array, value);
    expect(newArray[2]).not.toEqual(10);
  });
});
//Credit Trevor Thompson