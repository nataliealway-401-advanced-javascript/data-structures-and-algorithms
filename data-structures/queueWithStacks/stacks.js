'use strict';
/**
 * Node Class
 * @class
 * @param  {} value
 * @param  {} next
 */
class Node {
  constructor(value, next){
    this.value = value;
    this.next = null;
  }
}

//_____________ STACKS ________________
/**
 * Stack 
 * @class
 */
class Stack {
  constructor(){
    this.top = null;
  }

  /**
   * Method for adding node on to the top of the stack
   * @param {*} value 
   */
  push(value){
    let currentNode = new Node(value);
    currentNode.next = this.top;
    this.top = currentNode;
  }

  /**
   * Method for taking off the top node of the stack
   * @returns value
   */
  pop(){
    let temp = this.top;
    this.top = this.temp;
    this.top = this.top.next;
    temp.next = null;
    return temp;
  } 

  /**
   * Checks the value of the node on top of the stack
   */
  peek(){
    return this.top;
  }

  /**
   * Returns true if the stack is empty
   * @returns boolean
   */
  isEmpty() {
    if (this.top === null){
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;