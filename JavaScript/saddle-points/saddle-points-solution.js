export const saddlePoints = (matrix) => {
  const saddlePoints = [];
  const rows = matrix.length;
  const columns = matrix[0].length;

  for (let row = 0; row < rows; row++) {
    const rowMax = Math.max(...matrix[row]);
    for (let column = 0; column < columns; column++) {
      const columnMin = Math.min(...matrix.map((row) => row[column]));
      if (matrix[row][column] === rowMax && matrix[row][column] === columnMin) {
        saddlePoints.push({ row: row + 1, column: column + 1 });
      }
    }
  }
  return saddlePoints;
};
