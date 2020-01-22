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
 * @returns value
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
 * @returns boolean
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
   * @returns string
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
 * @returns value
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
* @returns value, newValue(newNode)
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
* @returns value
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
  /**
   *  Returns the value of node kth from the end of a linked list
   * @param  {} k
   * @returns value[index]
   */
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

// ~~~~~~~~~~~~~~~~~~~~~~~ LINKED LISTS MERGED ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Merges two linked lists into one list
 * @param {*} list1 
 * @param {*} list2 
 * @returns merged lists
 */
function mergeLists(list1, list2) {
  const merged = new LinkedList();
  let node1 = list1.head;
  let node2 = list2.head;

  if (node1 === null && node2 === null) return 'Error';
  if (node1 === null) return list2;
  if (node2 === null) return list1;

  while (node1 !== null && node2 !== null) {
    merged.insert(node1.value);
    merged.insert(node2.value);
    node1 = node1.next;
    node2 = node2.next;
  }

  if (node1 === null && node2 === null) return merged;
  if (node1 === null) {
    while (node2 !== null) {
      merged.insert(node2.value);
      node2 = node2.next;
    }
  }
  if (node2 === null) {
    while (node1 !== null) {
      merged.insert(node1.value);
      node1 = node1.next;
    }
  }
  return merged;
}



module.exports = { LinkedList, mergeLists };