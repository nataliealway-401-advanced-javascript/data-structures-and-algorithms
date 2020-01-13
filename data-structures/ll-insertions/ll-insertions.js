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
 * adds a new node with the given value to the end of the list
 * @param {*} data 
 */
  append(value){
    let appendedItem = new Node(value);
    let currentNode = this.head;
    if(this.head === null){
      this.head = appendedItem;
      return this.head;
    } else {
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = appendedItem;
    }
  }
  //add a new node with the given newValue immediately before the first value node
  insertBefore(value, newValue){
    let insertedItem = new Node(value);
    let currentNode = this.head;
    if(currentNode.data === newValue){
      this.insert(value);
      return;
    }
    while(currentNode.next){
      if(currentNode.next.value === newValue){
        insertedItem.next = currentNode.next;
        currentNode.next = insertedItem;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  insertAfter(value, newValue){
    let insertedItem = new Node(value);
    let currentNode = this.head;

    while(currentNode){
      if(currentNode.value === newValue){
        insertedItem.next = currentNode.next;
        currentNode.next = insertedItem;
      }
      currentNode = currentNode.next;
    }


  }


}

module.exports = LinkedList;