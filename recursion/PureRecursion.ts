const PureRecursion = (arr: Array<number>): number[] => {
  // No helper function even though below value is reset everytime.

  let newArr: Array<number> = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr = [...newArr, arr[0]];
  }

  // Concat the value from the recursive function to newArr
  newArr = newArr.concat(PureRecursion(arr.slice(1)));

  return newArr;
};
