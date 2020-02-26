'use strict';

module.exports = (hashTable1, hashTable2) => {

  let results = [];

  hashTable1.buckets.forEach(element => {
    let content = [];
    content.push(element.values()[0][0]);

    content.push(element.values()[0][1]);
    content.push(hashTable2.get(element.values()[0][0]));

    results.push(content);

  });

  return results;
};