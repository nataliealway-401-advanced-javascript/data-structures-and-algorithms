'use strict';
const Stack = require('./stacks.js');


class PseudoQueue {
  constructor(){
    this.stack1 = new Stack;
    this.stack2 = new Stack;
  }

  enqueue(value){
    this.stack1.push(value);
  }
    
  dequeue(){
    if(this.stack1.length === 0) {
      if(this.stack2.length === 0)
        return 'Queue empty';
    }
    while(this.stack1.top !== null){
      let p = this.stack1.pop();
      this.stack2.push(p);
    } 
    return this.stack2.pop();
  }
}


module.exports = PseudoQueue;
