/**
 * Insertion sort.
 * STEPS.
 *  - Start by picking the second element of the array.
 *  - Now compare the second element to the one before it and swap if nescessary,
 *  - Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.
 *  - Repeat until the array is sorted and
 *  - Return that array.
 * @param payload Array of numbers (unsorted).
 * @returns Array of number (sorted).
 *
 * BIG O - worst case (O(n^2)) best case (O(n))
 */
const insertionSort = (payload: Array<number>): Array<number> => {
  let result = [...payload];

  for (let i = 1; i < result.length; i++) {
    let currentVal = result[i];

    for (var j = i - 1; j >= 0 && result[j] > currentVal; j--) {
      if (result[j] < currentVal) {
        result[j + 1] = result[j];
      }
    }

    result[j + 1] = currentVal;
  }

  return result;
};
