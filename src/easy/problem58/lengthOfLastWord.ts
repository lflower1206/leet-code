const lengthOfLastWord = (s: string): number => {
  if (s.trim() === '') {
    return 0;
  }

  const arr = s.split(' ');
  let last = arr.pop();
  let result = 0;

  while (last !== undefined) {
    if (last.trim() !== '') {
      result = last.length;
      break;
    }
    last = arr.pop();
  }

  return result;
};

export default lengthOfLastWord;
