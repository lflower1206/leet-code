/**
 * Rules:
 * If I comes before V or X, subtract 1 eg: IV = 4 and IX = 9
 * If X comes before L or C, subtract 10 eg: XL = 40 and XC = 90
 * If C comes before D or M, subtract 100 eg: CD = 400 and CM = 900
 */
const romanToInt = (input: string): number => {
  /* tslint:disable:object-literal-sort-keys */
  const romanNumeralsMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const romanNumeralArray = input.split('');
  let result = 0;
  let prevRomanNumeralNumber: number = -1;
  let romanNumeral = romanNumeralArray.shift();

  while (romanNumeral !== undefined) {
    const currentNumber = romanNumeralsMap[romanNumeral];

    if (prevRomanNumeralNumber === -1) {
      result = result + currentNumber;
      prevRomanNumeralNumber = currentNumber;
    } else if (currentNumber < prevRomanNumeralNumber) {
      result = result + currentNumber;
      prevRomanNumeralNumber = currentNumber;
    } else if (currentNumber === prevRomanNumeralNumber) {
      result = result + currentNumber;
      prevRomanNumeralNumber = -1;
    } else if (currentNumber > prevRomanNumeralNumber) {
      result = result - prevRomanNumeralNumber + currentNumber - prevRomanNumeralNumber;
      prevRomanNumeralNumber = -1;
    }

    romanNumeral = romanNumeralArray.shift();
  }

  return result;
};

export default romanToInt;
