const isValid = (input: string): boolean => {
  const stack: string[] = [];
  const inputArray = input.split('');
  const expectResult: { [key: string]: boolean } = {
    '()': true,
    '[]': true,
    '{}': true,
  };

  if (inputArray.length === 0 || inputArray.length % 2 !== 0) {
    return false;
  }

  const result = inputArray.every((value) => {
    let prev;
    switch (value) {
      case '(':
      case '[':
      case '{':
        stack.push(value);
        return true;
      default:
        prev = stack.pop();
        if (prev === undefined) {
          return false;
        }

        return expectResult[`${prev}${value}`];
    }
  });

  return stack.pop() === undefined && result;
};

export default isValid;
