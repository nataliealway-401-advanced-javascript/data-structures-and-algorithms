'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right =  null;
  }
}

class BinaryTree {
  constructor(root){
    this.root = new Node(root);
  }
  //Preorder prints(logs) root<-left<-right 
  preOrder(print){
    print(this.value);
    if (this.left) this.left.preOrder(print);
    if (this.right) this.right.preOrder(print);
  }
  
  //inOrder prints(logs) left<-root<-right
  postOrder(print) {
    if (this.left) this.left.postOrder(print);
    if (this.right) this.right.postOrder(print);
    print(this.value);
  }
  
  //Postorder prints(logs) left<-right<-root
  inOrder(print) {
    if (this.left) this.left.inOrder(print);
    print(this.value);
    if (this.right) this.right.inOrder(print); 
  }
}

class BinarySearchTree extends BinaryTree {
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