const ORDER = ["fly", "spider", "bird", "cat", "dog", "goat", "cow", "horse"];

const VERSES = {
  fly: "I don't know why she swallowed the fly. Perhaps she'll die.",
  spider: "It wriggled and jiggled and tickled inside her.",
  bird: "How absurd to swallow a bird!",
  cat: "Imagine that, to swallow a cat!",
  dog: "What a hog, to swallow a dog!",
  goat: "Just opened her throat and swallowed a goat!",
  cow: "I don't know how she swallowed a cow!",
  horse: "She's dead, of course!",
};

export class Song {
  verse(num) {
    if (num < 1 || num > ORDER.length)
      throw new Error("Verse number out of bounds");

    const animal = ORDER[num - 1];
    let result = `I know an old lady who swallowed a ${animal}.\n${VERSES[animal]}\n`;

    if (animal === "horse") return result;

    for (let i = num - 1; i > 0; i--) {
      const currentAnimal = ORDER[i];
      const previousAnimal = ORDER[i - 1];
      const extraLine =
        previousAnimal === "spider"
          ? " that wriggled and jiggled and tickled inside her"
          : "";

      result += `She swallowed the ${currentAnimal} to catch the ${previousAnimal}${extraLine}.\n`;
    }

    if (num > 1 && num < ORDER.length) result += VERSES["fly"] + "\n";

    return result;
  }

  verses(start, end) {
    return Array.from(
      { length: end - start + 1 },
      (_, i) => this.verse(start + i) + "\n"
    ).join("");
  }
}
