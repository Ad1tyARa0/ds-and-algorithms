/**
 * Implement a function called countUniqueValues
 * which accepts a sorted array, and counts the unique
 * values in that array.
 * There can be negative values.
 * Assume the array is always sorted.x1
 */

const countUniqueValues = (payload: Array<number>): number => {
  if (payload.length === 0) {
    return 0;
  }

  let initial_index = 0;

  for (let i = 0; i < payload.length; i++) {
    // If the value is not the same that means its unique incremnt inital_index
    // and add value to the start of the array.
    if (payload[i] !== payload[initial_index]) {
      initial_index++;
      payload[initial_index] = payload[i];
    }
  }

  return initial_index + 1;
};

console.log(countUniqueValues([]));
