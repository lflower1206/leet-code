const maxSubArray = (nums: number[]): number => {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  
  if (nums.length === 1) {
    return nums[0];
  }

  let result = Number.NEGATIVE_INFINITY;
  let sum = 0;

  nums.forEach(num => {
    sum = num > sum + num ? num : sum + num;
    result = Math.max(result, sum);
  });

  return result;
};

export default maxSubArray;
