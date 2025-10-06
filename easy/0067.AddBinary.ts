function addBinary(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    const bitA = i >= 0 ? Number(a[i]) : 0;
    const bitB = j >= 0 ? Number(b[j]) : 0;

    const sum = bitA + bitB + carry;

    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return result;
}

console.log(addBinary("11", "1")); // "100"
console.log(addBinary("1010", "1011")); // "10101"

// function addBinary(a: string, b: string): string {
//   const s1 = BigInt("0b" + a); // преобразуем строку a в BigInt
//   const s2 = BigInt("0b" + b); // преобразуем строку b в BigInt
//   return (s1 + s2).toString(2); // складываем и возвращаем двоичную строку
// }
