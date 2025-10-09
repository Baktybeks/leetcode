function singleNumber(nums: number[]): number {
  const set = new Set<number>();
  for (const num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }
  return [...set][0];
}
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 4, 1, 2, 1, 2, 2]));
console.log(singleNumber([1]));

// function singleNumber(nums: number[]): number {
//     return nums.reduce((prev, curr) => prev ^ curr, 0)
// };

// function singleNumber(nums: number[]): number {
//     let a = null;

//     for (const num of nums){
//         a = a ^ num
//     }

//     return a
// };
