function isPowerOfTwo(n: number): boolean {
  if (n <= 0) return false;
  return Math.log2(n) % 1 === 0;
}

console.log(isPowerOfTwo(16));

// function isPowerOfTwo(n: number): boolean {

//     if (n==1) return true;
//     // return (n/2)&2 != 0  ? false : true;
//     while(n > 0){
//         // n = n/2
//         if(n==1){
//             return true;
//         }

//         n = n/2
//     }
//     return false //

// };
