const removeElement = (nums: number[], val: number): number => {
  let pointer = 0;

  if (nums === null || nums.length === 0) {
    return 0;
  }

  nums.forEach((num) => {
    if (num !== val) {
      nums[pointer] = num;
      pointer += 1;
    }
  });

  return pointer;
};

export default removeElement;
