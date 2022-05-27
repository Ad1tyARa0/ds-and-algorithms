const FactorialRecursive = (num: number): number => {
  if (num === 1) return 1;

  return num * FactorialRecursive(num - 1);
};

console.log(FactorialRecursive(4));
