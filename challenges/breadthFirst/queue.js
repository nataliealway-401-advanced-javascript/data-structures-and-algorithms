'use strict';

/**
 * Node Class
 * @class
 */
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

/**
 * Stack Class
 * @class
 */
class Stack {
  constructor() {
    this.top = null;
  }

  /**
   * Pushes node on to the top of the stack
   * @param {*} value 
   */
  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  /**
   * Removes the top node on the stack
   */
  pop() {
    let temp;

    temp = this.top;
    this.top = this.top.next;
    temp.next = null;

    return temp;
  }

  /**
   * Return the top node on the stack
   */
  peek() {
    return this.top;
  }

  /**
   * Return true if stack is empty
   */
  isEmpty() {
    let top = this.top;

    if (!top) return true;

    return false;
  }

}

/**
 * Queue Stack
 * @class
 */
class Queue {
  constructor() {
    this.rear = null;
    this.front = null;
    this.length = 0;
  }

  /**
   * Adds a node to the end of the queue
   * @param {*} value 
   */
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

  /**
   * Removes the node at the front of the queue
   */
  dequeue() {
    let temp;
    let hold = this.front;
    temp = this.front;

    this.front = this.front.next;
    temp.next = null;
    this.length--;
    return hold.value;
  }

  /**
   * Return the node at the front of the queue
   */
  peek() {
    return this.front;
  }

  /**
   * Returns boolean depending on queue being empty
   */
  isEmpty() {
    let front = this.front;

    if (!front) return true;
    return false;
  }
}

module.exports = { Stack, Queue };