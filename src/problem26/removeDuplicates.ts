const removeDuplicates = (nums: number[] | null): number => {
  let result;
  let pointer = 0;

  if (nums === null || nums.length === 0) {
    return 0;
  }

  result = 1;

  for (let index = 1 ; index < nums.length ; index += 1) {
    if (nums[index] !== nums[pointer]) {
      result += 1;
      pointer += 1;
      nums[pointer] = nums[index];
    }
  }

  return result;
};

export default removeDuplicates;
