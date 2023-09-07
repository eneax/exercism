export const encode = (str) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetReverse = alphabet.split("").reverse().join("");
  const encoded = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .replace(/[a-z]/g, (c) => alphabetReverse[alphabet.indexOf(c)]);

  return encoded
    .split("")
    .reduce((acc, c, i) => (i % 5 === 0 ? acc + " " + c : acc + c), "")
    .trim();
};

export const decode = (str) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetReverse = alphabet.split("").reverse().join("");

  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .replace(/[a-z]/g, (c) => alphabetReverse[alphabet.indexOf(c)]);
};
