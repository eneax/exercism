export const parse = (phrase) => {
  const words = phrase.split(/[\s_-]+/);
  let acronym = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    acronym += word[0].toUpperCase();
  }

  return acronym;
};
