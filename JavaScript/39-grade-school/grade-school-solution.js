export class GradeSchool {
  constructor() {
    this.students = {};
  }

  add(name, grade) {
    for (const g in this.students) {
      if (this.students[g].includes(name)) {
        this.students[g] = this.students[g].filter((n) => n !== name);
      }
    }

    if (!this.students[grade]) {
      this.students[grade] = [];
    }

    this.students[grade].push(name);
    this.students[grade].sort();
  }

  roster() {
    const roster = {};

    for (const grade in this.students) {
      roster[grade] = [...this.students[grade]];
    }

    return roster;
  }

  grade(grade) {
    return this.students[grade] ? [...this.students[grade]] : [];
  }
}
