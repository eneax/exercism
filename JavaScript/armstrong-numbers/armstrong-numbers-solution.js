export const isArmstrongNumber = (number) => {
  const numberArray = number.toString().split("");
  const length = numberArray.length;
  const sum = numberArray.reduce((acc, curr) => {
    return acc + Math.pow(curr, length);
  }, 0);

  return sum === number;
};
