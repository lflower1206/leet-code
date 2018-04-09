const isPalindrome = (input: number): boolean => {
  const MAX_NUMBER = 2147483647;
  const MIN_NUMBER = -2147483647;

  let revertNumber = 0;
  let remainder = 0;
  let tempInput = input;

  if (
    tempInput < 0 ||
    tempInput > MAX_NUMBER ||
    tempInput < MIN_NUMBER ||
    (tempInput % 10 === 0 && tempInput !== 0)
  ) {
    return false;
  }

  if (tempInput >= 0 && tempInput < 10) {
    return true;
  }

  while (
    revertNumber < tempInput &&
    revertNumber < MAX_NUMBER &&
    revertNumber > MIN_NUMBER
  ) {
    remainder = tempInput % 10;
    revertNumber = revertNumber * 10 + remainder;
    tempInput = Math.floor(tempInput / 10);
  }

  return (tempInput === revertNumber) || (tempInput === Math.floor(revertNumber / 10));
};

export default isPalindrome;
