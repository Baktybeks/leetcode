// function generate(numRows: number): number[][] {
//   const triangle: number[][] = [];
//   for (let i = 0; i < numRows; i++) {
//     const row: number[] = Array(i + 1).fill(1);
//     for (let j = 1; j < i; j++) {
//       row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
//     }
//     triangle.push(row);
//   }

//   return triangle;
// }

function generate(numRows: number): number[][] {
  const triangle: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    const row: number[] = Array(i + 1).fill(1);

    console.log(`\n🔹 Создаём строку №${i}: начально →`, row);

    for (let j = 1; j < i; j++) {
      const left = triangle[i - 1][j - 1];
      const right = triangle[i - 1][j];
      row[j] = left + right;

      console.log(`  ▶️ row[${j}] = ${left} + ${right} = ${row[j]}`);
    }

    triangle.push(row);

    console.log(`✅ Итоговая строка №${i}:`, row);
    console.log("📘 Текущий треугольник:", JSON.stringify(triangle));
  }

  console.log("\n🎯 Финальный треугольник Паскаля:");
  console.table(triangle);

  return triangle;
}

generate(10);
