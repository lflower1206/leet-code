const climbStairs = (steps: number): number => {
  if (steps <= 3) {
    return steps;
  }

  const cachedFactorial: { [key: number]: number } = {};

  // C(n, k)
  const getNumberOfCombinations = (n: number, k: number): number => {
    const getFactorial = (factorial: number): number => {
      if (factorial === 0 || factorial === 1) {
        return 1;
      }

      return factorial * getFactorial(factorial - 1);
    };

    const nk = n - k;

    if (!cachedFactorial[n]) {
      cachedFactorial[n] = getFactorial(n);
    }

    if (!cachedFactorial[k]) {
      cachedFactorial[k] = getFactorial(k);
    }

    if (!cachedFactorial[nk]) {
      cachedFactorial[nk] = getFactorial(nk);
    }

    return cachedFactorial[n] / (cachedFactorial[k] * cachedFactorial[nk]);
  };

  let oneStepCount = Math.ceil(steps % 2);
  let twoStepsCount = Math.floor(steps / 2);
  let length = oneStepCount + twoStepsCount;
  let result = 1;

  while (twoStepsCount > 0) {
    result += getNumberOfCombinations(length, twoStepsCount);

    oneStepCount += 2;
    twoStepsCount -= 1;
    length = oneStepCount + twoStepsCount;
  }

  return result;
};

export default climbStairs;
