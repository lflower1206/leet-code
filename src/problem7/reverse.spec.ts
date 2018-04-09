import reverse from './reverse';
import { expect } from 'chai';
import 'mocha';

describe('Problem 7', () => {
  it('Case 1', () => {
    const input = 123;
    const output = 321;
    const result = reverse(input);
    expect(result).equal(output);
  });
  it('Case 2', () => {
    const input = -123;
    const output = -321;
    const result = reverse(input);
    expect(result).equal(output);
  });
  it('Case 3', () => {
    const input = 120;
    const output = 21;
    const result = reverse(input);
    expect(result).equal(output);
  });
  it('Case 4', () => {
    const input = 1534236469;
    const output = 0;
    const result = reverse(input);
    expect(result).equal(output);
  });
  it('Case 5', () => {
    const input = -2147483648;
    const output = 0;
    const result = reverse(input);
    expect(result).equal(output);
  });
});
