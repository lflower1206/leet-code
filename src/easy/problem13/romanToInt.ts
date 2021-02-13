/**
 * Rules:
 * If I comes before V or X, subtract 1 eg: IV = 4 and IX = 9
 * If X comes before L or C, subtract 10 eg: XL = 40 and XC = 90
 * If C comes before D or M, subtract 100 eg: CD = 400 and CM = 900
 */
const romanNumeralsMap: Map<string, number> = new Map(
  Object.entries({
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  })
);
const romanToInt = (input: string): number => {
  const inputArray = input.split('');
  let prev = romanNumeralsMap.get('M');

  return inputArray.reduce((result, char) => {
    const current = romanNumeralsMap.get(char);

    if (current > prev) {
      result = result + current - 2 * prev;
    } else {
      result = result + current;
    }

    prev = current;
    return result;
  }, 0);
};

export default romanToInt;
