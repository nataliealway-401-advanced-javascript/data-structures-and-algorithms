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



  //~~~~~~~~~~~~~~~~ LL - INSERTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

  // ~~~~~~~~~~~~~~~~~~~~~~~ KTH FROM THE END ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  kthFromTheEnd(k){
    let currentNode = this.head;
    const values = [];

    while(currentNode !== null){
      values.push(currentNode.val);
      currentNode = currentNode.next;
    }
    if( k > values.length -1 || k < 0) return 'Exception';
    let index = (values.length - k ) -1;
    return values[index];
  }
}


module.exports = LinkedList;

