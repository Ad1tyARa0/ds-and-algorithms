/**
 * Bubble sort.
 * STEPS
 *  - Start looping from with a variable called i at the end of the array towards the beginning.
 *  - Start an inner loop with a variable called j from the beginning until i - 1;
 *  - if arr[j] is greater than arr[j + 1], swap those two values.
 *  - Return the sorted array.
 *  - Optimized with no swap variable.
 * @param payload
 * @returns Sorted array of numbers.
 *
 * BIG O - worst case (O(n^2)) best case (O(n))
 */
const bubbleSort = (payload: Array<number>): Array<number> => {
  let result = [...payload];

  // Optimization.
  let noSwaps;

  for (let i = result.length; i >= 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (result[j] > result[j + 1]) {
        // SWAP!
        let temp = result[j + 1];
        result[j + 1] = result[j];
        result[j] = temp;

        // If a swap occurs set noSwaps to false;
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return result;
};

console.log(bubbleSort([5, 3, 1, 7, 12]));
