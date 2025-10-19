// function isIsomorphic(s: string, t: string): boolean {
//   if (s.length !== t.length) return false;

//   const mapST = new Map<string, string>();
//   const mapTS = new Map<string, string>();

//   for (let i = 0; i < s.length; i++) {
//     const charS = s[i];
//     const charT = t[i];

//     if (
//       (mapST.has(charS) && mapST.get(charS) !== charT) ||
//       (mapTS.has(charT) && mapTS.get(charT) !== charS)
//     ) {
//       return false;
//     }

//     mapST.set(charS, charT);
//     mapTS.set(charT, charS);
//   }

//   return true;
// }

// console.log(isIsomorphic("egg", "add"));

function isIsomorphicObject(s: string, t: string): boolean {
  const sToT: Record<string, string> = {};
  const tToS: Record<string, string> = {};

  for (let i = 0; i < s.length; i++) {
    if (!sToT[s[i]]) sToT[s[i]] = t[i];
    if (!tToS[t[i]]) tToS[t[i]] = s[i];
    if (sToT[s[i]] !== t[i] || tToS[t[i]] !== s[i]) return false;
  }
  return true;
}

function isIsomorphicMap(s: string, t: string): boolean {
  const mapST = new Map<string, string>();
  const mapTS = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (
      (mapST.has(charS) && mapST.get(charS) !== charT) ||
      (mapTS.has(charT) && mapTS.get(charT) !== charS)
    ) {
      return false;
    }

    mapST.set(charS, charT);
    mapTS.set(charT, charS);
  }
  return true;
}

// 🔸 Генерация тестовых данных
const s = "abcde".repeat(100000); // 500 000 символов
const t = "fghij".repeat(100000);

// 🔹 Тест с Object
console.time("Object");
console.log(isIsomorphicObject(s, t));
console.timeEnd("Object");

// 🔹 Тест с Map
console.time("Map");
console.log(isIsomorphicMap(s, t));
console.timeEnd("Map");
