const Same = (arr1: Array<number>, arr2: Array<number>) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i] ** 2);

    if (index === -1) {
      return false;
    }

    arr2.splice(index, 1);
  }

  return true;
};

console.log(Same([1, 2, 4], [1, 16, 4]));
