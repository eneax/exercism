const DATA = [
  { character: "house that Jack built.", action: null },
  { character: "malt", action: "lay in" },
  { character: "rat", action: "ate" },
  { character: "cat", action: "killed" },
  { character: "dog", action: "worried" },
  { character: "cow with the crumpled horn", action: "tossed" },
  { character: "maiden all forlorn", action: "milked" },
  { character: "man all tattered and torn", action: "kissed" },
  { character: "priest all shaven and shorn", action: "married" },
  { character: "rooster that crowed in the morn", action: "woke" },
  { character: "farmer sowing his corn", action: "kept" },
  { character: "horse and the hound and the horn", action: "belonged to" },
];

export class House {
  static verse(num) {
    if (num < 1) return [];

    return [
      `This is the ${DATA[num - 1].character}`,
      ...this._remainingLines(num - 1),
    ];
  }

  static _remainingLines(num) {
    if (num < 1) return [];

    return [
      `that ${DATA[num].action} the ${DATA[num - 1].character}`,
      ...this._remainingLines(num - 1),
    ];
  }

  static verses(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
      result.push(...this.verse(i), "");
    }
    result.pop();
    return result;
  }
}
