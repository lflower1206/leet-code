import intToRoman from './intToRoman';

describe('intToRoman', () => {
  it('should return correspond symbol', () => {
    expect(intToRoman(1)).toBe('I');
    expect(intToRoman(5)).toBe('V');
    expect(intToRoman(10)).toBe('X');
  });

  it('should return repeat symbol', () => {
    expect(intToRoman(3)).toBe('III');
  });

  it('should return MCMXCIV', () => {
    expect(intToRoman(1994)).toBe('MCMXCIV');
  });
});
