
'use strict';
const Queue = require('../../data-structures/queueWithStacks/queue-with-stacks.js');
const BinaryTree = require('../../data-structures/tree/tree.js');

  
function breadthFirst() {
  let q = new Queue();
  q.enqueue(this.front);
  while(q !== null){
    let tempNode = q.dequeue();

    if(tempNode.left !== null){
      q.enqueue(tempNode.left);
    }
    if(tempNode.right !== null){
      q.enqueue(tempNode.right);
    }
  }
}


module.exports = breadthFirst();