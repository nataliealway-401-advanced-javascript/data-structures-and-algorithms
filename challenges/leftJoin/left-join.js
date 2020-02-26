'use strict';

module.exports = (hashTable1, hashTable2) => {

  let results = [];

  hashTable1.buckets.forEach(bucket => {
    let content = [];
    content.push(bucket.values()[0][0]);

    content.push(bucket.values()[0][1]);
    content.push(hashTable2.get(bucket.values()[0][0]));

    results.push(content);

  });

  return results;
};