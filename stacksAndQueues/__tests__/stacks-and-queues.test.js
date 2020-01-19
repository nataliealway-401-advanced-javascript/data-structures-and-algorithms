'use strict';

const { Stack, Queue } = require('../stacks-and-queues.js');
const queue = new Queue;
const stack = new Stack;

describe('Stack testing', () => {
  it('Can successfully push onto a stack', () => {
    stack.push(3);
    expect(stack.top.value).toBe(3);
  });

  it('Can successfully push multiple values onto a stack', () => {
    stack.push('a');
    stack.push('b');
    stack.push('c');
    expect(stack.top.value).toBe('c');
  });
  it('Can successfully pop off the stack', () => {
    stack.pop('c');
    expect(stack.top.value).toBe('b');
  });
  it('Can successfully empty a stack after multiple pops', () => {
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toBe(null);
  });

  it('Can successfully peek the next item on the stack', () => {
    expect(stack.peek()).toBe(null);
    stack.push(1);
    expect(stack.top.value).toBe(1);
  });
});

// QUEUES TESTING

describe('Queue testing', () => {
  it('Can successfully enqueue into a queue', () => {
    queue.enqueue('a');
    expect(queue.front.value).toBe('a');
  });
  it('Can successfully enqueue multiple values into a queue', () => {
    queue.enqueue('b');
    queue.enqueue('c');
    queue.enqueue('d');
    expect(queue.rear.value).toBe('d');
  });
  it('Can successfully dequeue out of a queue the expected value', () => {
    let removed = queue.dequeue();
    expect(removed.value).toBe('a');
  });
  it('Can successfully peek into a queue, seeing the expected value', () => {
    let peek = queue.peek();
    expect(peek.value).toBe('b');
  });
  it('Can successfully empty a queue after multiple dequeues', () => {
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    let peek = queue.peek();
    expect(peek).toBe(null);
    expect(queue.front).toBe(null);
    expect(queue.rear).toBe(null);
  });
});
  







