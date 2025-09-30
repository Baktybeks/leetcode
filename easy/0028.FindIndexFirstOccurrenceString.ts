function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}

// function strStr(haystack: string, needle: string): number {
//   const n = haystack.length;
//   const m = needle.length;

//   for (let i = 0; i <= n - m; i++) {
//     let j = 0;
//     while (j < m && haystack[i + j] === needle[j]) {
//       j++;
//     }
//     if (j === m) return i;
//   }

//   return -1;
// }

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("dadbutsad", "sad"));
