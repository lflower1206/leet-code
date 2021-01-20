import isPalindrome from './isPalindrome';


describe('Problem 9', () => {
  it('Case 1', () => {
    const input = -1;
    const output = false;
    const result = isPalindrome(input);
    expect(result).toBe(output);
  });
  it('Case 2', () => {
    const input = 10;
    const output = false;
    const result = isPalindrome(input);
    expect(result).toBe(output);
  });
  it('Case 3', () => {
    const input = 112211;
    const output = true;
    const result = isPalindrome(input);
    expect(result).toBe(output);
  });
  it('Case 4', () => {
    const input = 12321;
    const output = true;
    const result = isPalindrome(input);
    expect(result).toBe(output);
  });
  it('Case 5', () => {
    const input = 1534236469;
    const output = false;
    const result = isPalindrome(input);
    expect(result).toBe(output);
  });
  it('Case 6', () => {
    const input = -2147483648;
    const output = false;
    const result = isPalindrome(input);
    expect(result).toBe(output);
  });
  it('Case 7', () => {
    const input = 1;
    const output = true;
    const result = isPalindrome(input);
    expect(result).toBe(output);
  });
  it('Case 7', () => {
    const input = 121;
    const output = true;
    const result = isPalindrome(input);
    expect(result).toBe(output);
  });
});
