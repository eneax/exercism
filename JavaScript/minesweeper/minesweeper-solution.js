const MINE = "*";
const ADJACENT_VALUES = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 0],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

export const annotate = (input) => {
  const result = input.map((row) => [...row]);

  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[row].length; col++) {
      if (input[row][col] === MINE) {
        ADJACENT_VALUES.forEach(([rowAdj, colAdj]) => {
          const newRow = row + rowAdj;
          const newCol = col + colAdj;

          if (
            result[newRow] &&
            result[newRow][newCol] !== undefined &&
            result[newRow][newCol] !== MINE
          ) {
            result[newRow][newCol]++;
          }
        });
      }
    }
  }

  return result.map((row) => row.join(""));
};
