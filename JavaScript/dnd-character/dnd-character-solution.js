const ABILITIES = [
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma",
];

export const abilityModifier = (score) => {
  if (score < 3) throw Error("Ability scores must be at least 3");
  if (score > 18) throw Error("Ability scores can be at most 18");

  return Math.floor((score - 10) / 2);
};

export class Character {
  constructor() {
    for (const ability of ABILITIES) {
      this[ability] = Character.rollAbility();
    }
    this.hitpoints = abilityModifier(this.constitution) + 10;
  }

  static rollAbility() {
    const rollDice = () => Math.floor(Math.random() * Math.floor(6)) + 1;

    return Array(4)
      .fill(0)
      .map(rollDice)
      .sort()
      .slice(1, 4)
      .reduce((acc, value) => acc + value, 0);
  }
}
