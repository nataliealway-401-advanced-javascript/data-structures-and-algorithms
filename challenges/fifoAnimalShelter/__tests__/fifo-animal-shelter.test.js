'use strict';

const animalShelter = require('../fifo-animal-shelter.js');

describe('AnimalShelter testing..', () => {
  it('instantiate a empty "in" stack and "out" stack', () => {
    let shelter = new animalShelter;
  
    expect(shelter.in.isEmpty()).toBeTruthy();
    expect(shelter.out.isEmpty()).toBeTruthy();
  });
  describe('enqueue into the animal shelter', () => {
    let shelter = new animalShelter;
   
  
    it('should push to the first stack if empty', () => {
      shelter.enqueue('dog');
      expect(shelter.in.top.value).toEqual('dog');
    });
    it('should push to stack with multiple dog and cat values', () => {
      shelter.enqueue('dog');
      shelter.enqueue('cat');
      shelter.enqueue('cat');
      expect(shelter.in.top.value).toBe('cat');
    });
  });

  describe('dequeue from the animal shelter', () => {
    let shelter = new animalShelter;
  
    it('returns null if pref is not "dog" or "cat"', () => {
      shelter.enqueue('cat');
      shelter.enqueue('dog');
      shelter.enqueue('cat');
  
      expect(shelter.dequeue('bird')).toBeNull();

    });
  });
});