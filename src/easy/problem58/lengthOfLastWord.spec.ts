import lengthOfLastWord from './lengthOfLastWord';
import { expect } from 'chai';
import 'mocha';

describe('Problem 58', () => {
  it('Case 1', () => {
    const s = 'Hello World';
    const output = 5;
    const result = lengthOfLastWord(s);

    expect(result).equal(output);
  });
});
