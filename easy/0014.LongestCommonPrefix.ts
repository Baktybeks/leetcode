function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 0; i < strs.length; i++) {
    let j = 0;
    while (
      j < prefix.length &&
      j < strs[i].length &&
      prefix[j] === strs[i][j]
    ) {
      j++;
    }

    prefix = prefix.slice(0, j);
    if (prefix === "") return "";
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));

// function longestCommonPrefix(strs: string[]): string {
//     let prefix = strs[0];

//     for (let i = 1; i<strs.length; i++) {
//         while (!strs[i].startsWith(prefix)) {
//             prefix = prefix.slice(0, -1);
//         }

//         if (prefix === "") {
//             return "";
//         }
//     }

//     return prefix;
// };
