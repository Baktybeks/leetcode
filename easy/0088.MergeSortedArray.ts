// function merge(nums1: number[], m: number, nums2: number[], n: number) {
//   let i = m - 1;
//   let j = n - 1;
//   let k = m + n - 1;

//   while (j >= 0) {
//     if (i >= 0 && nums1[i] > nums2[j]) {
//       nums1[k--] = nums1[i--];
//     } else {
//       nums1[k--] = nums2[j--];
//     }
//   }
// }

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
