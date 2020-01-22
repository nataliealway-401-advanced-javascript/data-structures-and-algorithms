'use strict';

const { Stack } = require('../../data-structures/stacksAndQueues/stacks-and-queues.js');


/**
 * @class AnimalShelter
 */
class AnimalShelter {
  constructor() {
    this.in = new Stack;
    this.out = new Stack;
  }
  /**
   * Enqueue function
   * @param  {} pet
   */
  enqueue(pet){
    this.in.push(pet);
  }


  /**
   * Dequeue function
   * @param  {} pref
   * @returns value of prefrence type
   */

  // Credit to Travis Skyles
  dequeue(pref){
    if(pref !== 'dog' || pref !== 'cat'){
      return null;
    }
    if(this.out.isEmpty()){
      while(!this.in.isEmpty()){
        this.out.push(this.in.pop());
      }
    }
    if(!this.out.isEmpty()){
      let pickedPet;
      while(this.out.top.value !== pref){
        this.in.push(this.out.pop());
      }
      pickedPet = this.out.top.value;
      this.out.pop();
      while(!this.out.isEmpty()){
        this.in.push(this.out.pop());
      }
      return pickedPet;
    }
  }
}

module.exports = AnimalShelter;