export const SameRefactored = (arr1: Array<number>, arr2: Array<number>) => {
  interface FrequenceInterface {
    [n: number]: number;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequenceCounter1: FrequenceInterface = {};
  let frequenceCounter2: FrequenceInterface = {};

  for (let val of arr1) {
    if (frequenceCounter1[val] in frequenceCounter1) {
      frequenceCounter1[val] += 1;
    } else {
      frequenceCounter1[val] = 1;
    }
  }

  for (let val of arr2) {
    if (frequenceCounter2[val] in frequenceCounter2) {
      frequenceCounter2[val] += 1;
    } else {
      frequenceCounter2[val] = 1;
    }
  }

  for (let key in frequenceCounter1) {
    if (!(parseInt(key) ** 2 in frequenceCounter2)) {
      return false;
    }

    if (frequenceCounter2[parseInt(key) ** 2] !== frequenceCounter1[key]) {
      return false;
    }
  }

  return true;
};

console.log(SameRefactored([1, 5, 2, 4, 4], [25, 1, 16, 4, 16]));
