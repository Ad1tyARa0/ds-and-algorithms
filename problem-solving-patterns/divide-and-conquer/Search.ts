const Search = (nums: Array<number>, value: number) => {
  let min = 0;
  let max = nums.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (nums[middle] > value) {
      max = middle - 1;
    } else if (nums[middle] < value) {
      min = middle + 1;
    } else {
      return middle;
    }
  }
};
