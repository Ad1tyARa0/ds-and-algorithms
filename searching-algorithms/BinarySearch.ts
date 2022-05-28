/**
 * Function only accepts a sorted array and a value.
 * Create a left pointer at the start of the array and a,
 * right pointer at the end of the array.
 * while the left pointer comes before the right pointer.
 * create a pojnter in the middle.
 * if you find the balue you want return the index.
 * if the value is too small move the left pointer up.
 * if the value is too large move the right pointer down
 * if you never find the value return -1
 * @param arr Array of numbers or string (sorted)
 * @param elem Element to be found.
 * @returns Index of element or -1 if not present.
 *
 * BIG O - worst case (O(log n)), best case (O(1)), average case (O(log n))
 */
const BinarySearch = (
  arr: Array<string | number>,
  elem: string | number
): number | string => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    // Re calculate middle after shortening the array.
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === elem ? middle : -1;
};

console.log(
  BinarySearch(["a", "c", "d", "f", "h", "o", "p", "q", "y", "z"], "t")
);
