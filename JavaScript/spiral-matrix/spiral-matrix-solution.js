export const spiralMatrix = (size) => {
  const matrix = Array.from({ length: size }, () => Array(size).fill(0));
  let row = 0;
  let col = 0;
  let direction = "right";
  let count = 1;

  while (count <= size * size) {
    matrix[row][col] = count;
    count++;

    if (direction === "right") {
      if (col + 1 >= size || matrix[row][col + 1] !== 0) {
        direction = "down";
        row++;
      } else {
        col++;
      }
    } else if (direction === "down") {
      if (row + 1 >= size || matrix[row + 1][col] !== 0) {
        direction = "left";
        col--;
      } else {
        row++;
      }
    } else if (direction === "left") {
      if (col - 1 < 0 || matrix[row][col - 1] !== 0) {
        direction = "up";
        row--;
      } else {
        col--;
      }
    } else if (direction === "up") {
      if (row - 1 < 0 || matrix[row - 1][col] !== 0) {
        direction = "right";
        col++;
      } else {
        row--;
      }
    }
  }

  return matrix;
};
