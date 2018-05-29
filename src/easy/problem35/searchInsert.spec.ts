import searchInsert from './searchInsert';
import { expect } from 'chai';
import 'mocha';

describe('Problem 35', () => {
  it('Case 1', () => {
    const nums = [1, 3, 5, 6];
    const target = 5;
    const output = 2;
    const result = searchInsert(nums, target);

    expect(result).equal(output);
  });
  it('Case 2', () => {
    const nums = [1, 3, 5, 6];
    const target = 2;
    const output = 1;
    const result = searchInsert(nums, target);

    expect(result).equal(output);
  });
  it('Case 3', () => {
    const nums = [1, 3, 5, 6];
    const target = 7;
    const output = 4;
    const result = searchInsert(nums, target);

    expect(result).equal(output);
  });
  it('Case 4', () => {
    const nums = [1, 3, 5, 6];
    const target = 0;
    const output = 0;
    const result = searchInsert(nums, target);

    expect(result).equal(output);
  });
  it('Case 5', () => {
    const nums = [1, 3];
    const target = 1;
    const output = 0;
    const result = searchInsert(nums, target);

    expect(result).equal(output);
  });
});
