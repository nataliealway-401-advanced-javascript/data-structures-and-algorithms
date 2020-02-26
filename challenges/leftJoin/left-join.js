'use strict';

const leftJoin = (hashTable1, hashTable2) => {
  const joinedTable = [];

  //Iterate over the array
  for(let i = 0; i < hashTable1.array.length; i++){
    //Iterate over the buckets linked list
    if(hashTable1.array[i].head !== null){
      let current = hashTable1.array[i].head;
      while(current){
        //Get the key from the current list
        let key = Object.keys(current.data)[0];
        //Get the values in both hash tables from that key
        let ht1Value = hashTable1.get(key); 
        let ht2Value = hashTable2.get(key);

        let object = {};
        object[key] = [ht1Value, ht2Value];
        //Push the joined values on to the array
        joinedTable.push(object);
        //If there are more values in the bucket continue iterating over it
        current = current.next;
      }


    }
  }
  return joinedTable;
};


module.exports = leftJoin;