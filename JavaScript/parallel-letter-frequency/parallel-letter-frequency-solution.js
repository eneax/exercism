export const parallelLetterFrequency = async (texts) => {
  const counts = new Map();
  const promises = texts.map(async (text) => {
    for (const char of text) {
      const lowerChar = char.toLowerCase();
      if (/\p{Letter}/u.test(lowerChar)) {
        counts.set(lowerChar, (counts.get(lowerChar) || 0) + 1);
      }
    }
  });

  await Promise.all(promises);

  return Object.fromEntries(counts);
};
