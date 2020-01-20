'use strict';

const PseudoQueue = require('../queue-with-stacks.js');

describe('Queue with stacks testing', () => {
  it('Can succesfully enqueue using into PsuedoQueue', () => {
    let queue = new PseudoQueue();
    queue.enqueue('a');
    expect(queue.stack1.top.value).toBe('a');
  });
});