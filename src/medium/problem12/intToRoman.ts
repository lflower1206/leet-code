const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const symbols = [
  'M',
  'CM',
  'D',
  'CD',
  'C',
  'XC',
  'L',
  'XL',
  'X',
  'IX',
  'V',
  'IV',
  'I',
];

const intToRoman = (num: number): string => {
  let result = '';
  values.some((value: number, index: number) => {
    while (num >= value) {
      num = num - value;
      result += symbols[index];
    }

    return num <= 0;
  });
  return result;
};

export default intToRoman;
