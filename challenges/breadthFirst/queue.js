'use strict';

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}


class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }


  pop() {
    let temp;

    temp = this.top;
    this.top = this.top.next;
    temp.next = null;

    return temp;
  }


  peek() {
    return this.top;
  }

 
  isEmpty() {
    let top = this.top;

    if (!top) return true;

    return false;
  }

}


class Queue {
  constructor() {
    this.rear = null;
    this.front = null;
    this.length = 0;
  }


  enqueue(value) {
    let newNode = new Node(value);

    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    }
    this.rear.next = newNode;
    this.rear = newNode;
    this.rear.next = null;
    this.length++;
  }

 
  dequeue() {
    let temp;
    let hold = this.front;
    temp = this.front;

    this.front = this.front.next;
    temp.next = null;
    this.length--;
    return hold.value;
  }

 
  peek() {
    return this.front;
  }

  isEmpty() {
    let front = this.front;

    if (!front) return true;
    return false;
  }
}

module.exports = { Stack, Queue };