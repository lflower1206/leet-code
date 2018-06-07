const lengthOfLongestSubstring = (input: string): number => {
  if (input === null) {
    return 0;
  }

  if (input.length <= 1) {
    return input.length;
  }

  const inputArray = input.split('');
  let stack: string[] = [];
  let currentChar = inputArray.shift();
  let max = 1;

  while (currentChar !== undefined) {
    if (stack.indexOf(currentChar) > -1) {
      max = max > stack.length ? max : stack.length;
      stack = stack.slice(stack.indexOf(currentChar) + 1);
    }
    stack.push(currentChar);

    currentChar = inputArray.shift();
  }

  return max > stack.length ? max : stack.length;
};

export default lengthOfLongestSubstring;
