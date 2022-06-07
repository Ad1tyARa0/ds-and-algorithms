/**
 * Naive string search.
 * Function accepts a long string and a short string.
 * It checks how many times the short string appears in the longer string.
 * STEPS.
 *  - Loop over the longer string.
 *  - Loop over the shorter string.
 *  - If the characters dont match break out of the inner loop.
 *  - If the characters do match keep going.
 *  - If you complete the inner loop and find a match increment the count.
 * @param long Long string.
 * @param short Short string or pattern.
 * @returns Count of patterns in long string.
 */
const naiveStringSearch = (long: string, short: string): number => {
  let result = 0;

  return result;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i] !== short[j]) {
        break;
      } else {
      }
    }
  }
};
