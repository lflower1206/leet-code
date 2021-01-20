import lengthOfLastWord from './lengthOfLastWord';


describe('Problem 58', () => {
  it('Case 1', () => {
    const s = 'Hello World';
    const output = 5;
    const result = lengthOfLastWord(s);

    expect(result).toBe(output);
  });
});
