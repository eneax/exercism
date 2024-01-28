const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export class ResistorColorTrio {
  constructor([first, second, third]) {
    if (
      !COLORS.includes(first) ||
      !COLORS.includes(second) ||
      !COLORS.includes(third)
    ) {
      throw new Error("invalid color");
    }

    this.value =
      (COLORS.indexOf(first) * 10 + COLORS.indexOf(second)) *
      10 ** COLORS.indexOf(third);
  }

  get label() {
    if (this.value.toString().match(/000000000$/)) {
      return `Resistor value: ${this.value / 1000000000} gigaohms`;
    }

    if (this.value.toString().match(/000000$/)) {
      return `Resistor value: ${this.value / 1000000} megaohms`;
    }

    if (this.value.toString().match(/000$/)) {
      return `Resistor value: ${this.value / 1000} kiloohms`;
    }

    return `Resistor value: ${this.value} ohms`;
  }
}
