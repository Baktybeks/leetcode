function mySqrt(x: number): number {
  return Math.floor(Math.sqrt(x));
}

console.log(mySqrt(4));

// function mySqrt(x: number): number {
//   if (x < 2) return x;
//   let left = 2;
//   let right = Math.floor(x / 2);
//   let ans = 0;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     const squared = mid * mid;

//     if (squared === x) {
//       return mid;
//     } else if (squared < x) {
//       ans = mid;
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return ans;
// }
