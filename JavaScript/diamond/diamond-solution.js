export const rows = (letter) => {
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const letterIndex = ALPHABET.indexOf(letter);
  const diamond = [];

  for (let row = 0; row < 2 * letterIndex + 1; row++) {
    let rowContent = "";
    let diffFromCenter = Math.abs(letterIndex - row);

    for (let col = 0; col < 2 * letterIndex + 1; col++) {
      if (col === diffFromCenter || 2 * letterIndex - col === diffFromCenter) {
        rowContent += ALPHABET[letterIndex - diffFromCenter];
      } else {
        rowContent += " ";
      }
    }

    diamond.push(rowContent);
  }

  return diamond;
};
