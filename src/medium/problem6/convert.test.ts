import convert from './convert';

describe('problem 6 - convert', () => {
  it('should return itself', () => {
    expect(convert('a', 1)).toBe('a');
  });

  it('should return acb', () => {
    expect(convert('abc', 1)).toBe('abc');
  });

  it('should return pahnaplsiigyir', () => {
    expect(convert('paypalishiring', 3)).toBe('pahnaplsiigyir');
  });
});
