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
class Hashmap {
  constructor(size) {
    this.size = size || 5,
    this.buckets = new Array(this.size);
  }
  /**
   * @function hash
   * @param  {} key
   * @returns hashed key
   */
  hash(key) {
    return key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    },0) * 599 % this.size;
  }

  /**
   * @function add
   * @param  {} key, value
   */
  add(key, value) {
    if (!key) throw new Error('Invalid key');
    if (this.contains(key)) return 'This key has already been used';
    let index = this.hash(key);
    if (!this.buckets[index])  { this.buckets[index] = new LinkedList(); }
    this.buckets[index].add([key, value]);
  
  }

  /**
   * @function get
   * @param  {} key
   * @returns key
   */
  get(key) {
    if (!key) throw new Error('Invalid key');
    let index = this.hash(key);
    if (!this.buckets[index])  { return null; }
    return this.buckets[index].getKey(key);
  }

  /**
   * @function contains
   * @param  {} key
   * @returns boolean
   */
  contains(key) {
    if (!key) throw new Error('Invalid key');
    let index = this.hash(key);
    if (!this.buckets[index])  { return null; }
    return this.buckets[index].getKey(key) ? true : false;
  }
}

module.exports =  {LinkedList, Hashmap};