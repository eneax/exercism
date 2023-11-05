export const isValid = (isbn) => {
  const isbnArray = isbn.replace(/-/g, "").split("");

  if (isbnArray.length !== 10) return false;

  const isbnSum = isbnArray.reduce((acc, curr, index) => {
    if (index === 9 && curr === "X") {
      return acc + 10;
    } else if (curr === "X") {
      return false;
    } else {
      return acc + curr * (10 - index);
    }
  }, 0);

  return isbnSum % 11 === 0;
};
