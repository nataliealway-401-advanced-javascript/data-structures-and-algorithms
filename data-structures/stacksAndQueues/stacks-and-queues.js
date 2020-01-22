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
    this.temp = this.top;
    this.top = this.temp.next;
    return this.temp.value;
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

// ________ QEUES  __________
/**
 * Creates Queue class object
 * @class
 */
class Queue {
  constructor() {
    this.rear = null;
    this.front = null;
  }
  
   
  /**
   * Add a node to the rear of the queue
   * @param {*} value
   */
  enqueue(value) {
    let node = new Node(value);
    //If there is no front node, this node will be the front and the rear
    if(!this.front) return this.front = node, this.rear = node;
    //Otherwise this node will become the rear and have its next be the previous rear
    this.rear.next = node;
    return this.rear = node;
  }
  
  /**
   * Removes the first node in the queue, set the next node to front
   * @returns value
   */
  dequeue() {
    //Declare a temp variable to reference the front
    let temp = this.front;
    //Change the front to the the front's next node
    this.front = this.front.next;
    //If the front is null set the rear to be null as well
    if(!this.front)this.rear = null;
    temp.next = null;
    return temp;
  }
  //Look at the front of the queue
  peek() {
    return this.front;
  }
  
}


module.exports = { Queue, Stack };