function isValid_v1(s: string): boolean {
  const stack: string[] = [];
  const pairings: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack[stack.length - 1] === pairings[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

function isValid_v2(s: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

const n = 1_000_000;
const testString = "()".repeat(n / 2);

console.time("v1");
const res1 = isValid_v1(testString);
console.timeEnd("v1");

console.time("v2");
const res2 = isValid_v2(testString);
console.timeEnd("v2");

console.log({ res1, res2 });
