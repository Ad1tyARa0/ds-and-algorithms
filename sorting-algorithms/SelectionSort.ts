/**
 * Selection sort.
 * STEPS.
 *  - Store the first element as the smallest value you have seen so far.
 *  - Compare this item to the next item in the array until you find a smaller number.
 *  - If a smaller number is found, designate the smaller numbet to the new 'minimum' and continue until the end of the array.
 *  - If the 'minimum' is not the value (index) you initially began with swap the values.
 *  - Repeat this with the next element until the array is sorted.
 * @param payload Array of numbers (unsorted).
 * @returns Array of numbers (sorted).
 *
 *  BIG O - worst case (O(n^2)) best case (O(n))
 */
const selectionSort = (payload: Array<number>): Array<number> => {
  let result = [...payload];

  for (let i = 0; i < result.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[lowest]) {
        lowest = j;
      }
    }

    // Optimization.
    if (i !== lowest) {
      // SWAP!
      let temp = result[i];

      result[i] = result[lowest];

      result[lowest] = temp;
    }
  }

  return result;
};
