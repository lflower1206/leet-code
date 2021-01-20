import romanToInt from './romanToInt';


describe('Problem 13', () => {
  it('Case 1', () => {
    const input = 'IV';
    const output = 4;
    const result = romanToInt(input);
    expect(result).toBe(output);
  });
  it('Case 2', () => {
    const input = 'IX';
    const output = 9;
    const result = romanToInt(input);
    expect(result).toBe(output);
  });
  it('Case 3', () => {
    const input = 'XL';
    const output = 40;
    const result = romanToInt(input);
    expect(result).toBe(output);
  });
  it('Case 4', () => {
    const input = 'XC';
    const output = 90;
    const result = romanToInt(input);
    expect(result).toBe(output);
  });
  it('Case 5', () => {
    const input = 'CD';
    const output = 400;
    const result = romanToInt(input);
    expect(result).toBe(output);
  });
  it('Case 6', () => {
    const input = 'CM';
    const output = 900;
    const result = romanToInt(input);
    expect(result).toBe(output);
  });
  it('Case 7', () => {
    const input = 'MMXIV';
    const output = 2014;
    const result = romanToInt(input);
    expect(result).toBe(output);
  });
  it('Case 8', () => {
    const input = 'MDCCLXXVI';
    const output = 1776;
    const result = romanToInt(input);
    expect(result).toBe(output);
  });
});
