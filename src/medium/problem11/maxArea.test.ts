import maxArea from './maxArea';

describe('problem 11', () => {
  it('should calculate area by given 2 numbers', () => {
    expect(maxArea([3, 4])).toBe(3);
  });

  it('should calculate max area', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });
});
