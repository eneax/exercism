export class CustomSet {
  constructor(values = []) {
    this.values = values;
  }

  empty() {
    return this.values.length === 0;
  }

  contains(value) {
    return this.values.includes(value);
  }

  subset(other) {
    return this.values.every((value) => other.contains(value));
  }

  disjoint(other) {
    return !this.values.some((value) => other.contains(value));
  }

  eql(other) {
    return this.subset(other) && other.subset(this);
  }

  add(value) {
    if (!this.contains(value)) {
      this.values.push(value);
    }
    return this;
  }

  intersection(other) {
    const values = this.values.filter((value) => other.contains(value));
    return new CustomSet(values);
  }

  difference(other) {
    const values = this.values.filter((value) => !other.contains(value));
    return new CustomSet(values);
  }

  union(other) {
    const values = [...this.values, ...other.values];
    return new CustomSet(values);
  }
}
