const searchInsert = (nums: number[], target: number) => {
  if (nums === null || nums.length === 0) {
    return 0;
  }

  // target is less than 1st num
  if (target <= nums[0]) {
    return 0;
  }

  // target is greater than last num
  if (nums[nums.length -1] < target) {
    return nums.length;
  }

  if (nums.length === 2) {
    return 1;
  }

  let start = 0;
  let end = nums.length - 1;
  let range = end - start;
  let mid = Math.ceil(range / 2);
  let midValue = nums[mid];
  let result;

  while (true) {
    if (range === 2) {
      if (target <= midValue) {
        result = mid;
      } else if (target <= nums[end]) {
        result = mid + 1
      } else {
        result = mid + 2;
      }
      break;
    }
    
    if (target > midValue) {
      start = mid
    } else if (target < midValue) {
      end = mid;
    } else {
      result = mid;
      break;
    }

    range = end - start;
    mid = start + Math.ceil(range / 2);
    midValue = nums[mid];
  }

  return result;
};

export default searchInsert;
