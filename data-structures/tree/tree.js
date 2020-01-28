'use strict';
/**
 * class Node
 * @class
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

module.exports = Node;
/**
 * Binary Tree
 * @class
 */
class BinaryTree {
  constructor(root){
    this.root = new Node(root);
  }
  
  /**
   * Preorder prints(logs) root<-left<-right 
   * @param  {} print
   */
  preOrder(){
    let result = [];
    const traverse = node => {
      result.push(node.value);
      if(node.left){
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }
  
  /**
   * Postorder prints(logs) left<-right<-root 
   * @param  {} print
   */

  postOrder() {
    let result = [];
    const traverse = node => {
      if(node.left){
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
  
  
  
  /**
   * inOrder prints(logs) left<-root<-right
   * @param  {} print
   */
  inOrder(print) {
    let result = [];
    const traverse = node => {
      if(node.left){
        traverse(node.left);
      }
      result.push(node.value);
      if(node.right){
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }
}
  


class BinarySearchTree extends BinaryTree {
  
  /**
   * Add traverses the tree and adds a node based on if it's value
   * @function add
   * @param {*} value 
   */
  add(value) {
    let root = this.root;
    
    if(!root){
      this.root = new Node(value);
      return;
    }
    else {
      const search = (node) => {
        if(value < node.value) {
          if(!node.left){
            node.left = new Node(value);
            return;
          }
          else {
            return search(node.left);
          }
        }
        else if(value > node.value) {
          if(!node.right){
            node.right = new Node(value);
            return;
          }
          else{
            return search(node.right);
          }
        }
      };
    
      return search(root);
    }
  }
    
  /**
   * Contains checks the tree for a value and returns a Boolean
   * @function contains
   * @param {*} value 
   */
  contains(value) {
    let currentNode = this.root;
    
    while(currentNode){
      if(value === currentNode.value){
        return true;
      }
      if(value < currentNode.value) {
        currentNode = currentNode.left;
      }
      else if(value > currentNode.value){
        currentNode = currentNode.right;
      }
    }
    
    return false;
  }    
}





module.exports = BinarySearchTree;