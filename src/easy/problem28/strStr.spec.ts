import strStr from './strStr';


describe('Problem 28', () => {
  it('Case 1', () => {
    const haystack = 'hello';
    const needle = 'll';
    const output = 2;
    const result = strStr(haystack, needle);

    expect(result).toBe(output);
  });
  it('Case 2', () => {
    const haystack = 'aaaaa';
    const needle = 'bba';
    const output = -1;
    const result = strStr(haystack, needle);
    
    expect(result).toBe(output);
  });
  it('Case 3', () => {
    const haystack = 'aaaaa';
    const needle = '';
    const output = 0;
    const result = strStr(haystack, needle);
    
    expect(result).toBe(output);
  });
  it('Case 4', () => {
    const haystack = 'hello';
    const needle = 'l';
    const output = 2;
    const result = strStr(haystack, needle);

    expect(result).toBe(output);
  });
  it('Case 5', () => {
    const haystack = 'aaa';
    const needle = 'aaaa';
    const output = -1;
    const result = strStr(haystack, needle);

    expect(result).toBe(output);
  });
  it('Case 6', () => {
    const haystack = 'mississippi';
    const needle = 'issip';
    const output = 4;
    const result = strStr(haystack, needle);

    expect(result).toBe(output);
  });
});
