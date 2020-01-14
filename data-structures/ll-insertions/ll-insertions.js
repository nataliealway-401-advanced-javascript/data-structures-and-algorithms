'use strict';

/**
 * @class Node
 */

class Node {
  constructor(value, next){
    this.value = value;
    this.next = null;
  }
}

/**
 * @class LinkedList
 */
class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
 *  Creates new node then inserts in into the linked list
 * @param {number} value 
 */
  insert(value) {
    let inserted = new Node(value);
    inserted.next = this.head;
    this.head = inserted;
    return this.head;
  }

  /**
 * adds a new node with the given value to the end of the list
 * @param {*} value
 */
  append(value){
    let newNode = new Node(value);
    let currentNode = this.head;
    if(this.head === null){
      this.head = newNode;
      return this.head;
    } else {
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  /**
 * add a new node with the given newValue immediately before the first value node
 * @param value
 * @param newValue
 */
  insertBefore(value, newValue){
    let newNode = new Node(newValue);
    let currentNode = this.head;

    if(currentNode.value === value) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      while (currentNode.next.value !== value) {
        currentNode = currentNode.next;
      } 
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }


  /**
 * Inserts a new value after the value in the list
 * @param value
 * @param newValue
 */

  insertAfter(value, newValue){
    let newNode = new Node(newValue);
    let currentNode = this.head;

    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;

  }


}

module.exports = LinkedList;