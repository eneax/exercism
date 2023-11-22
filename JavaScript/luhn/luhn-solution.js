export const valid = (string) => {
  if (string.trim().length < 2) return false;
  if (string.match(/[^0-9| ]/g)) return false;

  let num = string
    .split("")
    .filter((n) => n !== " ")
    .map((n) => Number(n))
    .reverse();

  for (let i = 1; i < num.length; i++) {
    if (i % 2 > 0) {
      if (num[i] * 2 > 9) {
        num[i] = num[i] * 2 - 9;
      } else {
        num[i] = num[i] * 2;
      }
    }
  }

  const sum = num.reduce((a, b) => a + b);

  if (sum % 10 === 0) return true;

  return false;
};
