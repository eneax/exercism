export const encode = (plainText, rails) => {
  const fence = Array(rails).fill("");
  let rail = 0;
  let direction = 1;

  for (let i = 0; i < plainText.length; i++) {
    fence[rail] += plainText[i];
    rail += direction;

    if (rail === 0 || rail === rails - 1) {
      direction *= -1;
    }
  }

  return fence.join("");
};

export const decode = (cipherText, rails) => {
  const fence = Array(rails).fill("");
  const railLengths = Array(rails).fill(0);
  let rail = 0;
  let direction = 1;

  for (let i = 0; i < cipherText.length; i++) {
    railLengths[rail]++;
    rail += direction;

    if (rail === 0 || rail === rails - 1) {
      direction *= -1;
    }
  }

  let railIndex = 0;
  for (let i = 0; i < cipherText.length; i++) {
    fence[railIndex] += cipherText[i];
    railLengths[railIndex]--;

    if (railLengths[railIndex] === 0) {
      railIndex++;
    }
  }

  let plaintext = "";
  rail = 0;
  direction = 1;

  for (let i = 0; i < cipherText.length; i++) {
    plaintext += fence[rail][0];
    fence[rail] = fence[rail].substring(1);
    rail += direction;

    if (rail === 0 || rail === rails - 1) {
      direction *= -1;
    }
  }

  return plaintext;
};
