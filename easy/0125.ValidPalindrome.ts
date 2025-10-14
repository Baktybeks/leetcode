function isPalindrome(s: string): boolean {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

// function isPalindrome(s: string) :boolean {
//     s = s.toLowerCase();
//     s = s.replace(/[^a-zA-Z0-9]/g, '');
//     let reverse = s.split('').reverse().join('');
//     return s === reverse;
// };




console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
