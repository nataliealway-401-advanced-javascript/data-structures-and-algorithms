'use strict';

const PseudoQueue = require('../queue-with-stacks.js');

describe('Queue with stacks testing', () => {
  it('Can succesfully enqueue using into PsuedoQueue', () => {
    let queue = new PseudoQueue();
    queue.enqueue('a');
    expect(queue.stack1.top.value).toBe('a');
  });

  it('Can succesfully enqueue multiple variables in PsuedoQueue', () => {
    let queue = new PseudoQueue();
    queue.enqueue('b');
    queue.enqueue('c');
    expect(queue.stack1.top.value).toBe('c');
    expect(queue.stack1.top.next.value).toBe('b');
  });

  it.skip('Can succesfully dequeue a value out of a queue ', () => {
    const queue = new PseudoQueue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    queue.dequeue();
    expect(queue.stack2.top).toBe('a');
  });

});