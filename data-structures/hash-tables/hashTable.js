'use strict';
/**
 * @class Node
 * @param  {} value
 */
class Node {
  constructor(value) {
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
   * @function add
   * @param  {} value
   * @returns added node
   */
  add(value) {
    if(!value) throw new Error('Invalid value');
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
  }
  /**
   * @function getKey
   * @param  {} key
   * @returns key
   */
  getKey(key) {
    if (!this.head) return;
    let current = this.head;
    while (current) {
      if (current.value[0] === key) return current.value[1]; 
      current = current.next;
    }

    return;
  }

  /**
   * @function values
   * @returns values
   */
  values() {
    let values = [];
    let current = this.head;

    while(current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

/**
 * @class Hashmap
 */
class HashTable {
  /**
   * @constructor
   * @param {Number} size - The size of the hashtable array you want to create 
   */
  constructor(size){
    this.size = size;
    this.array = [];
    //Making each of the indexes a new linked list
    for(let i = 0; i < size; i++) this.array[i] = new LinkedList();
  }
  /**
   * @function hash
   * @param  {} key
   * @returns hashed key
   */
  hash(key){
    let hash = 1;
    for(let i = 0; i < key.length -1; i++){
      hash *= key.charCodeAt(i);
    }
    hash = (hash * 599) % this.size;
    return hash;
  }
  
  /**
   * @function add
   * @param  {} key, value
   */
  add(key, value){
    const index = this.hash(key);
    let data = {};
    data[key] = value;
    return this.array[index].insert(data);
  }
 /**
   * @function get
   * @param  {} key
   * @returns key
   */
  get(key){
    const index = this.hash(key);
    let bucket = this.array[index].head;
    while (bucket) {
      if (bucket.data[key]) return bucket.data[key];
      bucket = bucket.next;
    }
    return null;
  }
  /**
   * @function contains
   * @param  {} key
   * @returns boolean
   */
  contains(key){
    const index = this.hash(key);
    let bucket = this.array[index].head;
    while(bucket){
      if(bucket.data[key]) return true;
      bucket = bucket.next;
    }
    return false;
  }

}


module.exports = HashTable;