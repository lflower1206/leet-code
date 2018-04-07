const twoSum = (nums: number[], target: number) => {
  if (!Array.isArray(nums) || nums.length === 0) {
    return [];
  }

  const clonedArray = nums.slice(0);
  const result: number[] = [];
  let isMatch = false;

  for (let i = 0 ; i < clonedArray.length - 1 ; i += 1) {

    if (isMatch) {
      break;
    }

    for (let j = i + 1 ; j < clonedArray.length ; j += 1) {
      isMatch = clonedArray[i] + clonedArray[j] === target;
      if (isMatch) {
        result.push(i);
        result.push(j);

        break;
      }
    }
  }

  return result;
};

export default twoSum;
