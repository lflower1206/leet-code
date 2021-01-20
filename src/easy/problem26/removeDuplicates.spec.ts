import removeDuplicates from './removeDuplicates';


const toString = (nums: number[] | null) => {
  if (nums === null) {
    return '';
  }

  return nums.join(', ');
};

describe('Problem 26', () => {
  it('Case 1', () => {
    const input = [1, 1, 2];
    const output = 2;
    const result = removeDuplicates(input);
    expect(result).toBe(output);
    expect(toString(input.slice(0, result))).toBe(toString([1, 2]));
  });
  it('Case 2', () => {
    const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const output = 5;
    const result = removeDuplicates(input);
    expect(result).toBe(output);
    expect(toString(input.slice(0, result))).toBe(toString([0, 1, 2, 3, 4]));
  });
});
