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
 * @param {*} value 
 * @memberof LinkedList
 */
  insert(value) {
    let inserted = new Node(value);
    inserted.next = this.head;
    this.head = inserted;
    return this.head;
  }

  /**
 *  Takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list
 * @param {*} value 
 * @memberof LinkedList
 */
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


  /**
   * returns a string representing all the values in the Linked List,
   * in format "{ a } -> { b } -> { c } -> NULL"
   * @memberof Linkedlist
   */
  toString() {
    let currentNode = this.head;
    let string = 'head';
    while (currentNode !==null) {
      string = `${string} -> ${currentNode.value}`;
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
