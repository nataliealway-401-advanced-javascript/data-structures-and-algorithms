'use strict';
const Stack = require('./stacks.js');

/**
 * @class Pseudo Class
 */
class PseudoQueue {
  constructor(){
    this.stack1 = new Stack;
    this.stack2 = new Stack;
  }
  /**
   * Takes in a node in the queue with given value
   * @param  {} value
   */
  enqueue(value){
    this.stack1.push(value);
  }
   
  /**
   * Removes a node from the top of the queue and returns its value
   * @param  {} value
   */
  dequeue(){
    if (this.stack2.length === 0) {
      if (this.stack1.length === 0) { 
        return 'Cannot dequeue because queue is empty'; 
      }
      while (this.stack1.length > 0) {
        var p = this.stack1.pop();
        this.stack2.push(p);
      }
    }
    return this.stack2.pop();
  }
}

module.exports = PseudoQueue;
