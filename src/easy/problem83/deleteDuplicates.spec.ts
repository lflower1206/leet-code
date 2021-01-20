import { deleteDuplicates, IListNode } from './deleteDuplicates';


const toString = (node: IListNode) => {
  const result = [];
  let currentNode = node;

  while (currentNode !== null && currentNode !== undefined) {
    result.push(currentNode.val);
    currentNode = currentNode.next!;
  }

  return result.join(' -> ');
};

describe('Problem 83 - Remove Duplicates from Sorted List', () => {
  it('Case 1', () => {
    const input: IListNode = {
      next: {
        next: {
          next: {
            next: null,
            val: 4,
          },
          val: 2,
        },
        val: 2,
      },
      val: 1,
    };
    const output = [1, 2, 4].join(' -> ');
    const result = deleteDuplicates(input);

    expect(toString(result)).toBe(output);
  });
  it('Case 2', () => {
    const input: IListNode = {
      next: {
        next: {
          next: {
            next: {
              next: null,
              val: 3,
            },
            val: 3,
          },
          val: 2,
        },
        val: 1,
      },
      val: 1,
    };
    const output = [1, 2, 3].join(' -> ');
    const result = deleteDuplicates(input);

    expect(toString(result)).toBe(output);
  });
  it('Case 3', () => {
    const input: IListNode = {
      next: {
        next: null,
        val: 1,
      },
      val: 1,
    };
    const output = [1].join(' -> ');
    const result = deleteDuplicates(input);

    expect(toString(result)).toBe(output);
  });
  it('Case 4', () => {
    const input: IListNode = {
      next: {
        next: {
          next: null,
          val: 2
        },
        val: 1,
      },
      val: 1,
    };
    const output = [1, 2].join(' -> ');
    const result = deleteDuplicates(input);

    expect(toString(result)).toBe(output);
  });
});
