'use strict';

const animalShelter = require('../fifo-animal-shelter.js');

describe('AnimalShelter testing..', () => {
  it('instantiate a empty "in" stack and "out" stack', () => {
    let shelter = new animalShelter;
  
    expect(shelter.in.isEmpty()).toBeTruthy();
    expect(shelter.out.isEmpty()).toBeTruthy();
  });
});