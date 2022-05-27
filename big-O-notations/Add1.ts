const Add1 = (n: number) => {
  let total = 0;

  for (let i = 0; i < n; i++) {
    total += i;
  }

  return total;
};

console.log(Add1(8));
