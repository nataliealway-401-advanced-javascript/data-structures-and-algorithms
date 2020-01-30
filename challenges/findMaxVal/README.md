# Binary Trees: Find-Maximum-Value

Find the Maximum Value in a Binary Tree


## Challenge

Write an instance method called find-maximum-value. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

#### Links and Resources
[Submission PR](https://github.com/nataliealway-401-advanced-javascript/data-structures-and-algorithms/pull/17) <br>
[Travis-ci](https://www.travis-ci.com/nataliealway-401-advanced-javascript/data-structures-and-algorithms)

#### Documentation
[jsdocs](https://github.com/nataliealway-401-advanced-javascript/data-structures-and-algorithms/blob/find-maximum-binary-tree/docs/challenges_findMaxVal_findMaxVal.js.html)


## Approach & Efficiency
My approach was to first declare the root value as the maximum value node. Then as it traverses down the tree, compares each node to the the root, if its greater than, then that node becomes the new max. I feel this method is pretty efficient.

## Solution

![findMaxUML](../assets/findmaxUML.jpg)
