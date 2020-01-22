# fifo Animal Shelter

First-in, First out Animal Shelter.

## Challenge

Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.

### Links and Resources
[Submission PR](https://github.com/nataliealway-401-advanced-javascript/data-structures-and-algorithms/pull/11)
[Travis-ci](https://www.travis-ci.com/nataliealway-401-advanced-javascript/data-structures-and-algorithms)

#### Documentation
[jsdocs]()

## Approach & Efficiency
* enqueue - O(1): because this will only add a cat/dog to the back of the queue and does not iterate through the entire list
* dequeue - O(n): because this will potentially go through the entire queue if the pref pet is not actually in the queue

## Solution

![](UML)
