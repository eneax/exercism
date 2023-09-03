export class Allergies {
  constructor(score) {
    this.score = score;
    this.allergies = {
      1: "eggs",
      2: "peanuts",
      4: "shellfish",
      8: "strawberries",
      16: "tomatoes",
      32: "chocolate",
      64: "pollen",
      128: "cats",
    };
  }

  allergicTo(allergy) {
    return this.list().includes(allergy);
  }

  list() {
    const allergies = [];

    for (let i = 1; i <= 128; i *= 2) {
      if (this.score & i) {
        allergies.push(this.allergies[i]);
      }
    }

    return allergies;
  }
}
