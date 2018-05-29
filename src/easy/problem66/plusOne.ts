const plusOne = (digits: number[]): number[] => {
  let result = digits.slice();
  let decimal = 1;
  let index = digits.length - 1;
  let last;

  while (decimal === 1 && index >= 0) {
    last = result[index];

    if (last === 9) {
      result[index] = 0;
      decimal = 1;
    } else {
      result[index] = last + 1;
      decimal = 0;
    }

    index -= 1;
  }

  if (decimal === 1 && index === -1) {
    result = [1].concat(result);
  }

  return result;
};

export default plusOne;
