import twoSum from './twoSum';

describe('Problem 1', () => {
  it('Case 1', () => {
    const nums: number[] = [];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result).toEqual([]);
  });
  it('Case 2', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 1]);
  });
});
