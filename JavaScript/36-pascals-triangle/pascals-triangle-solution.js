export const rows = (numRows) => {
  const triangle = [];

  for (let i = 0; i < numRows; i++) {
    triangle[i] = [];

    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        triangle[i][j] = 1;
      } else {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
    }
  }

  return triangle;
};
