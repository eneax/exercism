export const countWords = (phrase) => {
  const words = phrase.toLowerCase().match(/\w+('\w+)?/g);
  const wordCounts = {};

  if (words) {
    words.forEach((word) => {
      if (wordCounts[word]) {
        wordCounts[word]++;
      } else {
        wordCounts[word] = 1;
      }
    });
  }

  return wordCounts;
};
