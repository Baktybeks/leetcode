/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

var twoSum = function (nums, target) {
  const map = {};

  for (let num = 0; num < nums.length; num++) {
    const current = nums[num];
    console.log(map, "map");
    console.log(current, "current");
    console.log(map[current], "map[current]");

    if (map[current] !== undefined) {
      console.log(
        [map[current], num],
        " [map[current], num] [map[current], num] [map[current], num] [map[current], num]"
      );

      return [map[current], num];
    }
    map[target - current] = num;
  }
  return [0, 0];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([2, 5, 5, 11], 10));

// Время: O(n²) → для массива из 10 000 элементов будет 50 000 000 проверок.
// Память: O(1) → не используем дополнительную память.
// Для больших массивов вариант с map работает на порядки быстрее, потому что делает всего один проход (O(n)), а не вложенные циклы (O(n²)).
// Это особенно важно на интервью/алгоритмах: оптимальное решение ценится выше.
// Недостаток только один — потребление памяти (map), но обычно это не критично.
