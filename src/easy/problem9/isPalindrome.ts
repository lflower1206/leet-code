const isPalindrome = (input: number): boolean => {
  const MAX_NUMBER = 2147483647;
  const MIN_NUMBER = -2147483647;

  if (input < 0 || input > MAX_NUMBER || input < MIN_NUMBER) {
    return false;
  }

  if (input < 10) {
    return true;
  }

  const inputString = input.toString(10);
  let left = 0;
  let right = inputString.length - 1;

  while (left < right) {
    if (inputString[left++] !== inputString[right--]) {
      return false
    }
  }

  return true
};

export default isPalindrome;
