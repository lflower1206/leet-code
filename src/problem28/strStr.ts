const strStr = (haystack: string, needle: string): number => {

  if (needle === '') {
    return 0;
  }

  if (haystack.length < needle.length) {
    return -1;
  }

  const haystackArray = haystack.split('');
  const firstCharOfNeedle = needle.substring(0, 1);
  const endIndex = haystackArray.length - needle.length;
  let isMatch = false;
  let haystackIndex = 0;

  while (haystackIndex <= endIndex) {
    if (haystackArray[haystackIndex] === firstCharOfNeedle && haystack.substr(haystackIndex, needle.length) === needle) {
      isMatch = true;
      break;
    }

    haystackIndex += 1;
  }

  return isMatch ? haystackIndex : -1;
};

export default strStr;
