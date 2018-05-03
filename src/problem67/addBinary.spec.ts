import addBinary from './addBinary';
import { expect } from 'chai';
import 'mocha';

describe('Problem 67', () => {
  it('Case 1', () => {
    const a = '11';
    const b = '1';
    const output = '100';
    const result = addBinary(a, b);

    expect(result).equal(output);
  });
  it('Case 2', () => {
    const a = '1010';
    const b = '1011';
    const output = '10101';
    const result = addBinary(a, b);

    expect(result).equal(output);
  });
});
