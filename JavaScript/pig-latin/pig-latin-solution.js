const VOWEL_CASES = ["a", "e", "i", "o", "u", "xr", "yt"];

function findIndexOfFirstVowel(word, start) {
  return (
    word
      .split("")
      .slice(start)
      .findIndex((char) => [...VOWEL_CASES, "y"].includes(char)) + 1
  );
}

function translateWord(word) {
  if (VOWEL_CASES.every((vowel) => !word.startsWith(vowel))) {
    const firstVowelIndex = findIndexOfFirstVowel(word, 1);
    let prefixRange = firstVowelIndex;

    if (word.slice(0, prefixRange + 1).includes("qu")) prefixRange += 1;

    const prefix = word.slice(0, prefixRange);
    word = word.replace(prefix, "") + prefix;
  }

  return word + "ay";
}

export const translate = (inputText) =>
  inputText
    .split(" ")
    .map((word) => translateWord(word))
    .join(" ");
