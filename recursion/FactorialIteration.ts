const Factorial = (num: number) => {
  let total = 1;

  for (let i = num; i > 1; i--) {
    total = total * i;
  }

  return total;
};

console.log(Factorial(4));
