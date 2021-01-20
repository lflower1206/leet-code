import removeElement from './removeElement';


const toString = (nums: number[] | null) => {
  if (nums === null) {
    return '';
  }

  return nums.join(', ');
};

describe('Problem 27', () => {
  it('Case 1', () => {
    const input = [1, 1, 2];
    const output = 1;
    const result = removeElement(input, 1);
    expect(result).toBe(output);
    expect(toString(input.slice(0, result))).toBe(toString([2]));
  });
  it('Case 2', () => {
    const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const output = 7;
    const result = removeElement(input, 1);
    expect(result).toBe(output);
    expect(toString(input.slice(0, result))).toBe(toString([0, 0, 2, 2, 3, 3, 4]));
  });
});
