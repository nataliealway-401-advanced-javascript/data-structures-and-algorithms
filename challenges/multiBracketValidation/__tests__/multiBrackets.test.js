'use strict';

const bracketValidation = require('../multi-bracket-validation');

describe('Multi bracket validator testing', () => {

  it('Should return true when presented with balanced brackets', () => {
    expect(bracketValidation('()')).toBeTruthy();
    expect(bracketValidation('[({})]')).toBeTruthy();
    expect(bracketValidation('(){}[{}]')).toBeTruthy();
  });

  it('should return true when match is found with extra characters', () => {
    expect(bracketValidation('{helloWorld}[]()')).toBeTruthy();
  });

  it.skip('Should return false when presented with unbalanced brackets', () => {
    expect(bracketValidation('(){]]')).toBeFalsy();
    expect(bracketValidation('(({]]))')).toBeFalsy();
    expect(bracketValidation('((}]]]]')).toBeFalsy();
  });

  it('Should return undefined when given a value that is not a string', () => {
    expect(bracketValidation(3)).toBeUndefined();

  });
});
