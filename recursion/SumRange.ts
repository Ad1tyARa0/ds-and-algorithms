const SumRange = (num: number): number => {
  if (num === 1) return 1;
  return num + SumRange(num - 1);
};

console.log(SumRange(4));
