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