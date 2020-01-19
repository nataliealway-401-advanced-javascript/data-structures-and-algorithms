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

  it('Can successfully instantiate an empty stack', () => {
    expect(stack.isEmpty()).toEqual(null);
  });


});








