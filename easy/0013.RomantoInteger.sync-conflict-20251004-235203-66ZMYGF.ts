// function romanToInt(s: string): number {
//   const roman: Record<string, number> = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let total = 0;
//   for (let i = 0; i < s.length; i++) {
//     const current = roman[s[i]];
//     const next = roman[s[i + 1]];
//     if (next && current < next) {
//       total -= current;
//     } else {
//       total += current;
//     }
//   }
//   return total;
// }

function romanToInt(s: string): number {
  const roman: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  return [...s].reduce((total, char, i, arr) => {
    const current = roman[char];
    const next = roman[arr[i + 1]];
    return next && current < next ? total - current : total + current;
  }, 0);
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("III"));

// array.reduce(
//   (accumulator, currentValue, currentIndex, array) => { ... },
//   initialValue
// );
// То есть колбэк получает 4 аргумента:
// accumulator — текущее накопленное значение (в твоём случае total).
// currentValue — элемент массива (в твоём случае char).
// currentIndex — индекс текущего элемента (в твоём случае i).
// array — сам исходный массив (в твоём случае arr).
