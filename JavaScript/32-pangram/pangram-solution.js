export const isPangram = (sentence) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerCaseSentence = sentence.toLowerCase();

  return alphabet
    .split("")
    .every((letter) => lowerCaseSentence.includes(letter));
};
