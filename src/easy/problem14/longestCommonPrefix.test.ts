import longestCommonPrefix from './longestCommonPrefix';

describe('longestCommonPrefix', () => {
  it('should return empty string if the array is empty', () => {
    expect(longestCommonPrefix([])).toBe('');
  });

  it('should return itself as common prefix', () => {
    expect(longestCommonPrefix(['abc'])).toBe('abc');
  });

  it('should return common prefix fl', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  });

  it('should return empty string if no matched prefix', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  });

  it('should return empty string if no matched substring is not prefix', () => {
    expect(longestCommonPrefix(['reflower', 'flow', 'flight'])).toBe('');
  });
});
