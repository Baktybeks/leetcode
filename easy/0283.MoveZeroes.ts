function moveZeroes(nums: number[]): void {
  let insertPos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }
}

// function moveZeroes(nums: number[]): void {
//     let p1: number = 0;
//     for(let i: number = 0; i < nums.length; i++){
//         if(nums[i] !== 0){
//             nums[p1] = nums[i];
//             p1++;
//         }
//     }
//     for(let i: number = p1; i < nums.length; i++){
//         nums[p1] = 0;
//         p1++;
//     }
// };

console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1,3,12,0,0]))
