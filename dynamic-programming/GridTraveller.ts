interface gridInterface {
  [m: string]: number;
}

const gridTraveller = (
  m: number,
  n: number,
  memo: gridInterface = {}
): number => {
  let key = m + "," + n;

  if (key in memo) return memo[key];

  if (m === 1 && n === 1) return 1;

  if (m === 0 || n === 0) return 0;

  memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);

  return memo[key];
};

// Big O
// Time complexity with memo -> O(n + m) without memo -> O(n * m)
