/**
 * Check if two given strings are anagrams.
 * @param s1 string 1
 * @param s2 string 2
 */
const checkAnagram = (s1: string, s2: string) => {
  if (s1.length !== s2.length) {
    return false;
  }

  interface ObjectInterface {
    [m: string]: number;
  }

  let s1_obj: ObjectInterface = {};

  let s2_obj: ObjectInterface = {};

  for (let i = 0; i < s1.length; i++) {
    if (!s1_obj[s1[i]]) {
      s1_obj = {
        ...s1_obj,
        [s1[i]]: 1,
      };
    } else {
      s1_obj = {
        ...s1_obj,
        [s1[i]]: s1_obj[s1[i]] + 1,
      };
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (!s2_obj[s2[i]]) {
      s2_obj = {
        ...s2_obj,
        [s2[i]]: 1,
      };
    } else {
      s2_obj = {
        ...s2_obj,
        [s2[i]]: s2_obj[s2[i]] + 1,
      };
    }
  }

  for (const key in s1_obj) {
    if (s1_obj[key] !== s2_obj[key] && !s2_obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
};

console.log(checkAnagram("garden", "danger"));
