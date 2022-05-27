const ValidAnagram = (str1: string, str2: string) => {
  if (str1.length !== str2.length) {
    return false;
  }

  interface LookupInterface {
    [n: string]: number;
  }

  const lookup: LookupInterface = {};

  for (let val of str1) {
    if (lookup[val]) {
      lookup[val] += 1;
    } else {
      lookup[val] = 1;
    }
  }

  for (let val of str2) {
    if (!lookup[val]) {
      return false;
    } else {
      lookup[val] - +1;
    }
  }

  return true;
};

console.log(ValidAnagram("abcd", "dcag"));
