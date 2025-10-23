const nums = [null, {}, 3];

Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};

console.log(nums.last());

console.log(Object.getOwnPropertyNames(Array.prototype));

// Array.prototype.last = function() {
//   if(this.length==0){

//       return -1;

//   }
//   return this[this.length-1];
// };

// В движках JS (V8, SpiderMonkey) if-ветвление чуть проще для оптимизации JIT, потому что там нет "выражения", а есть прямой return.

// Тернарник (? :) преобразуется в "conditional expression", что требует дополнительной обработки.

// Но это разница в наносекундах — на практике никакой пользы в реальных задачах ты не получишь.
