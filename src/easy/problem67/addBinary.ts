const addBinary = (binaryA: string, binaryB: string): string => {
  const splittedA = binaryA.split('');
  const splittedB = binaryB.split('');
  const result: number[] = [];

  let carry = 0;
  let digitA = splittedA.pop();
  let digitB = splittedB.pop();

  while (digitA || digitB) {
    let sum = carry;

    sum += digitA ? parseInt(digitA, 10) : 0;
    sum += digitB ? parseInt(digitB, 10) : 0;

    carry = Math.floor(sum / 2);

    result.push(sum % 2);
    
    digitA = splittedA.pop();
    digitB = splittedB.pop();
  }

  if (carry) {
    result.push(carry);
  }

  return result.reverse().join('');
};

export default addBinary;
