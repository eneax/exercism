export const rotate = (string, key) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabet.split("");
  const stringArray = string.split("");
  let result = "";

  stringArray.forEach((letter) => {
    if (alphabetArray.includes(letter.toLowerCase())) {
      const index = alphabetArray.indexOf(letter.toLowerCase());
      const newIndex = index + key;
      const newLetter = alphabetArray[newIndex % 26];
      result +=
        letter === letter.toUpperCase() ? newLetter.toUpperCase() : newLetter;
    } else {
      result += letter;
    }
  });

  return result;
};
