function isPalindrome(x: number): boolean {
  const str = String(x);
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

// function isPalindrome(x: number): boolean {
//     const numString = x.toString()
//     let left = 0
//     let right = numString.length - 1
//     let isPalindrome = true
//     while (left < right) {
//         if(numString[left] !== numString[right]) {
//             isPalindrome = false
//             break
//         }
//         left++
//         right--
//     }
//     return isPalindrome
// };
