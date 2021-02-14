const longestCommonPrefix = (strings: string[]): string => {
  if (strings.length === 0) {
    return '';
  }

  let prefix = strings.pop();

  while (prefix && strings.length > 0) {
    const currentString = strings.pop();

    prefix = prefix.slice(0, currentString.length);

    while (prefix && currentString.indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }

  return prefix;
};

export default longestCommonPrefix;
