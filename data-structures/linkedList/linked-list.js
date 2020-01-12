'use strict';

/**
 * @class
 */

class Node {
  constructor(value, next){
    this.value = value;
    this.next = null;
  }
}

/**
 * @class
 */
class LinkedList {
  constructor() {
    this.head = null;
  }


  insert(value) {
    let inserted = new Node(value);
    inserted.next = this.head;
    this.head = inserted;
    return this.head;
  }


  includes(value) {
    let currentNode = this.head;
    while(currentNode){
      if (currentNode.value === value){
        return true;
      }
      currentNode = currentNode.next;
    }
    return null;
  }



 toString() {
    let currentNode = this.head;
    let string = '';
    while (current !==null) {
      string = `${string} -> {${currentNode.value}}`;
      currentNode = currentNode.next;
    }
    return `${string} -> NULL`;
  }
}

module.exports = LinkedList;


// * The head property will properly point to the first node in the linked list
// * Can properly insert multiple nodes into the linked list
// * Will return true when finding a value within the linked list that exists
// * Will return false when searching for a value in the linked list that does not exist
// * Can properly return a collection of all the values that exist in the linked list
