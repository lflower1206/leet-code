import climbStairs from './climbStairs';
import { expect } from 'chai';
import 'mocha';

describe('Problem 70 - Climbing Stairs', () => {
  it('Case 1', () => {
    const n = 3;
    const output = 3;
    const result = climbStairs(n);

    expect(result).equal(output);
  });
  it('Case 2', () => {
    const n = 4;
    const output = 5;
    const result = climbStairs(n);

    expect(result).equal(output);
  });
  it('Case 3', () => {
    const n = 6;
    const output = 13;
    const result = climbStairs(n);

    expect(result).equal(output);
  });
  it('Case 4', () => {
    const n = 7;
    const output = 21;
    const result = climbStairs(n);

    expect(result).equal(output);
  });
  it('Case 5', () => {
    const n = 9;
    const output = 55;
    const result = climbStairs(n);

    expect(result).equal(output);
  });
});
