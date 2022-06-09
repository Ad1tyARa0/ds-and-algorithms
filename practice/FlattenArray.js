const data = [1, 2, 3, [1, 4, [5, 6], 8], 12, 5];

const flatten = arr => {
  let flatArray = [];

  arr.forEach(e => {
    if (Array.isArray(e)) {
      flatArray = flatArray.concat(flatten(e));
    } else {
      flatArray = [...flatArray, e];
    }
  });

  return flatArray;
};

console.log(flatten(data));
