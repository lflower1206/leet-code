import lengthOfLongestSubstring from './lengthOfLongestSubstring';


describe('Problem 3: Longest Substring Without Repeating Characters', () => {
  it('Case 1', () => {
    const input = 'abcabcbb';
    const output = 3;
    const result = lengthOfLongestSubstring(input);

    expect(result).toBe(output);
  });
  it('Case 2', () => {
    const input = 'bbbbb';
    const output = 1;
    const result = lengthOfLongestSubstring(input);

    expect(result).toBe(output);
  });
  it('Case 3', () => {
    const input = 'pwwkew';
    const output = 3;
    const result = lengthOfLongestSubstring(input);

    expect(result).toBe(output);
  });
  it('Case 4', () => {
    const input = 'au';
    const output = 2;
    const result = lengthOfLongestSubstring(input);

    expect(result).toBe(output);
  });
  it('Case 5', () => {
    const input = 'tmmzuxt';
    const output = 5;
    const result = lengthOfLongestSubstring(input);

    expect(result).toBe(output);
  });
  it('Case 6', () => {
    const input = 'bpfbhmipx';
    const output = 7;
    const result = lengthOfLongestSubstring(input);

    expect(result).toBe(output);
  });
});
