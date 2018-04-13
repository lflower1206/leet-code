import { IListNode, mergeTwoLists } from './mergeTwoLists';
import { expect } from 'chai';
import 'mocha';

const toString = (node: IListNode) => {
  const result = [];
  let currentNode = node;

  while (currentNode !== null) {
    result.push(currentNode.val);
    currentNode = currentNode.next!;
  }

  return result.join(' -> ');
};

describe('Problem 21', () => {
  it('Case 1', () => {
    const input1: IListNode = null;
    const input2: IListNode = null;
    const output: IListNode = null;
    const result = mergeTwoLists(input1, input2);
    expect(result).equal(output);
  });
  it('Case 2', () => {
    const input1: IListNode = {
      next: {
        next: {
          next: null,
          val: 4,
        },
        val: 2,
      },
      val: 1,
    };
    const input2: IListNode = null;
    const output = [1, 2, 4].join(' -> ');
    const result = mergeTwoLists(input1, input2);
    expect(toString(result)).equal(output);
  });
  it('Case 3', () => {
    const input1: IListNode = null;
    const input2: IListNode = {
      next: {
        next: {
          next: null,
          val: 4,
        },
        val: 3,
      },
      val: 1,
    };
    const output = [1, 3, 4].join(' -> ');
    const result = mergeTwoLists(input1, input2);
    expect(toString(result)).equal(output);
  });
  it('Case 4', () => {
    const input1: IListNode = {
      next: {
        next: {
          next: null,
          val: 4,
        },
        val: 2,
      },
      val: 1,
    };
    const input2: IListNode = {
      next: {
        next: {
          next: null,
          val: 4,
        },
        val: 3,
      },
      val: 1,
    };
    const output = [1, 1, 2, 3, 4, 4].join(' -> ');
    const result = mergeTwoLists(input1, input2);
    expect(toString(result)).equal(output);
  });
});
