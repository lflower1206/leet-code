import twoSum from './twoSum';
import { expect } from 'chai';
import 'mocha';

describe('Problem 1', () => {
  it('Case 1', () => {
    const nums: number[] = [];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result).deep.equals([]);
  });
  it('Case 1', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result).deep.equals([0, 1]);
  });
});
