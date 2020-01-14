'use strict';

kthFromTheEnd(k){
    let currentNode = this.head;
    const values = [];

    while(currentNode !==null){
        values.push(currentNode.values);
        currentNode = currentNode.next;
    }
    if( k > values.length -1 || k < 0){
        return;
    }
    let index = (values.length -k )-1;
    return values[index];
}