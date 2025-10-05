function climbStairs(n) {
  if (n <= 2) return n;

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    const current = first + second;
    first = second;
    second = current;
  }

  return second;
}

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));
console.log(climbStairs(7));

// function climbStairs(n: number): number {
//   const memo: Map<number, number> = new Map()
//   const count = (n: number) => {
//       if (memo.has(n)) return memo.get(n)
//       if (n <= 0) return 0;
//       memo.set(n, count(n-1) + count(n-2))
//       return 1+memo.get(n)
//   }

//   return count(n)
// };
