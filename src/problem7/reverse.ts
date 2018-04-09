const reverse = (input: number | null): number | null => {
  const MAX_NUMBER = 2147483647;
  const MIN_NUMBER = -2147483647;
  if (input === null || input > MAX_NUMBER || input < MIN_NUMBER) {
    return 0;
  }

  const inputArray = input.toString().split('');
  const resultArray = [];
  let result = 0;
  let digit: string | undefined;

  if (inputArray[0] === '-') {
    resultArray.push(inputArray.shift());
  }
  digit = inputArray.pop();

  while (digit !== undefined) {
    resultArray.push(digit);
    digit = inputArray.pop();
  }

  result = parseInt(resultArray.join(''), 10);

  if (result > MAX_NUMBER || result < MIN_NUMBER) {
    return 0;
  }

  return result;
};

export default reverse;
