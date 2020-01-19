'use strict';

class Node {
  constructor(value, next){
    this.value = value;
    this.next = null;
  }
}

//_____________ STACKS ________________

class Stack {
  constructor(){
    this.top = null;
  }


  push(value){
    let currentNode = new Node(value);
    currentNode.next = this.top;
    this.top = currentNode;
  }

  pop(){
    let temp = this.top;
    this.temp = this.top;
    this.top = this.temp.next;
    return this.temp.data;
  }

  peek(){
    return this.top;
  }

  isEmpty() {
    if (this.top === null){
      return true;
    } else {
      return false;
    }
}

  // ________ QEUES  __________

  class Queue {
    constructor() {
      this.rear = null;
      this.front = null;
    }
  
   
    enqueue(value) {
      let node = new Node(value);
      //If there is no front node, this node will be the front and the rear
      if(!this.front) return this.front = node, this.rear = node;
      //Otherwise this node will become the rear and have its next be the previous rear
      this.rear.next = node;
      return this.rear = node;
    }
  
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
  
  module.exports = {Queue, Stack};










}