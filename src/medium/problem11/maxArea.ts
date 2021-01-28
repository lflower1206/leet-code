const maxArea = (height: number[]): number => {
  let left = 0;
  let right = height.length - 1;
  let area = 0;

  while (left < right) {
    const result = Math.min(height[left], height[right]) * (right - left);

    area = Math.max(area, result);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return area;
};

export default maxArea;
