import maxSubArray from './maxSubArray';

describe('Problem 53', () => {
  it('Case 1', () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const output = 6;
    const result = maxSubArray(nums);

    expect(result).toBe(output);
  });
  it('Case 2', () => {
    const nums = [8, -9, 2, 5, -1, 3];
    const output = 9;
    const result = maxSubArray(nums);

    expect(result).toBe(output);
  });
  it('Case 3', () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4, -1, 2, 2, -1];
    const output = 8;
    const result = maxSubArray(nums);

    expect(result).toBe(output);
  });
  it('Case 4', () => {
    const nums = [-1];
    const output = -1;
    const result = maxSubArray(nums);

    expect(result).toBe(output);
  });
  it('Case 5', () => {
    const nums = [5, -1];
    const output = 5;
    const result = maxSubArray(nums);

    expect(result).toBe(output);
  });
  it('Case 6', () => {
    const nums = [-1, 5];
    const output = 5;
    const result = maxSubArray(nums);

    expect(result).toBe(output);
  });
  it('Case 7', () => {
    const nums = [-1, -2];
    const output = -1;
    const result = maxSubArray(nums);

    expect(result).toBe(output);
  });
});
