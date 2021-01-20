import isValid from './isValid';


describe('Problem 20', () => {
  it('Case 1', () => {
    const input = '';
    const output = false;
    const result = isValid(input);
    expect(result).toBe(output);
  });
  it('Case 2', () => {
    const input = '[';
    const output = false;
    const result = isValid(input);
    expect(result).toBe(output);
  });
  it('Case 3', () => {
    const input = '((';
    const output = false;
    const result = isValid(input);
    expect(result).toBe(output);
  });
  it('Case 4', () => {
    const input = '{[}]';
    const output = false;
    const result = isValid(input);
    expect(result).toBe(output);
  });
  it('Case 5', () => {
    const input = '()[]{}';
    const output = true;
    const result = isValid(input);
    expect(result).toBe(output);
  });
});
