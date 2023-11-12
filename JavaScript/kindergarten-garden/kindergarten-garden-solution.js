const DEFAULT_STUDENTS = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Fred",
  "Ginny",
  "Harriet",
  "Ileana",
  "Joseph",
  "Kincaid",
  "Larry",
];

const PLANT_CODES = {
  G: "grass",
  V: "violets",
  R: "radishes",
  C: "clover",
};

export class Garden {
  constructor(diagram, students = DEFAULT_STUDENTS) {
    [this.row1, this.row2] = diagram.split("\n");
    this.students = students.sort();
  }

  plants(student) {
    const start = this.students.indexOf(student) * 2;

    return [
      ...(this.row1.slice(start, start + 2) +
        this.row2.slice(start, start + 2)),
    ].map((v) => PLANT_CODES[v]);
  }
}
