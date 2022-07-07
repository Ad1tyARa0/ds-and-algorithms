interface fibInterface {
  [n: number]: number;
}

// Memoization.
const fib = (n: number, memo: fibInterface = {}): number => {
  if (n in memo) return memo[n];

  if (n <= 2) return 1;

  // Store values in the hashmap. on recursive call if that value exists already it will just be returned.
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

  return memo[n];
};

// Without memoization.
const fibWithoutMemo = (n: number): number => {
  if (n <= 2) return 1;

  return fibWithoutMemo(n - 1) + fibWithoutMemo(n - 2);
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(50));
