/**
 * Write a function canSum(targetSum. numbers) that takes in a target sum and an array of numbers as argunents.
 *
 * The function should return a boolean indicating whether or not it is possilbe to generate the target sum using the numbers from the array.
 *
 * Assume all input numbers are non negative.
 *
 * You may use an element of the array as many times as needed.
 *
 */

const canSum = (target: number, numbers: Array<number>): boolean => {
  if (target === 0) return true;

  if (target < 0) return false;

  for (let num of numbers) {
    const remainder = target - num;

    if (canSum(remainder, numbers)) {
      return true;
    }
  }

  return false;
};
