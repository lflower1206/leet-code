const convert = (input: string, numOfRow: number): string => {
  if (input.length <= 2 || numOfRow === 1) {
    return input;
  }

  const result: string[] = [];
  const offset = 2 * numOfRow - 2;

  for (let row = 0; row < numOfRow; row++) {
    let column = row;

    while (column < input.length) {
      result.push(input[column]);

      // Not the first and last row
      if (row > 0 && row < numOfRow - 1) {
        const indexBetweenColumn = column + offset - 2 * row;

        if (indexBetweenColumn < input.length) {
          result.push(input[indexBetweenColumn]);
        }
      }

      column += offset;
    }
  }

  return result.join('');
};

export default convert
