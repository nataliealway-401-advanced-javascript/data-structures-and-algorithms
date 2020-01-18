'use strict';

class Node {
  constructor(value, next){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }


  push(value){
    let currentNode = new Node(value);
    currentNode.next = this.top;
    this.top = currentNode;
  }

  pop(){
    let temp = this.top;
    this.temp = this.top;
    this.top = this.temp.next;
    return this.temp.data;
  }

  peek(){
    return this.top;
  }

  isEmpty() {
    if (this.top === null){
      return true;
    } else {
      return false;
    }
  }








}