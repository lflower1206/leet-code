import { addTwoNumbers, ListNode } from './addTwoNumbers';
import { expect } from 'chai';
import 'mocha';

const toString = (node: ListNode) => {
  const result = [];
  let currentNode = node;

  while (currentNode !== null) {
    result.push(currentNode.val);
    currentNode = currentNode.next!;
  }

  return result.join(' -> ');
};

describe('Problem 2: Add Two Numbers', () => {
  it('Case 1', () => {
    const node1: ListNode = {
      next: {
        next: {
          next: null,
          val: 3,
        },
        val: 4,
      },
      val: 2,
    };
    const node2: ListNode = {
      next: {
        next: {
          next: null,
          val: 4,
        },
        val: 6,
      },
      val: 5,
    };
    const output = [7, 0, 8].join(' -> ');

    const result = addTwoNumbers(node1, node2);

    expect(toString(result)).equal(output);
  });
  it('Case 2', () => {
    const node1: ListNode = {
      next: null,
      val: 0,
    };
    const node2: ListNode = {
      next: null,
      val: 0,
    };
    const output = [0].join(' -> ');

    const result = addTwoNumbers(node1, node2);

    expect(toString(result)).equal(output);
  });
  it('Case 3', () => {
    const node1: ListNode = {
      next: null,
      val: 3,
    };
    const node2: ListNode = {
      next: null,
      val: 7,
    };
    const output = [0, 1].join(' -> ');

    const result = addTwoNumbers(node1, node2);

    expect(toString(result)).equal(output);
  });
  it('Case 4', () => {
    const node1: ListNode = {
      next: {
        next: null,
        val: 6
      },
      val: 3,
    };
    const node2: ListNode = {
      next: null,
      val: 7,
    };
    const output = [0, 7].join(' -> ');

    const result = addTwoNumbers(node1, node2);

    expect(toString(result)).equal(output);
  });
});
