export const isIsogram = (word) => {
  const letters = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();

    if (letter !== "-" && letter !== " ") {
      if (letters[letter]) {
        return false;
      }
      letters[letter] = true;
    }
  }

  return true;
};
