import plusOne from './plusOne';
import { expect } from 'chai';
import 'mocha';

describe('Problem 66', () => {
  it('Case 1', () => {
    const digits = [1, 2, 3];
    const output = [1, 2, 4];
    const result = plusOne(digits);

    expect(result.join(', ')).equal(output.join(', '));
  });
  it('Case 2', () => {
    const digits = [1, 9, 9];
    const output = [2, 0, 0];
    const result = plusOne(digits);

    expect(result.join(', ')).equal(output.join(', '));
  });
  it('Case 3', () => {
    const digits = [9];
    const output = [1, 0];
    const result = plusOne(digits);

    expect(result.join(', ')).equal(output.join(', '));
  });
});
