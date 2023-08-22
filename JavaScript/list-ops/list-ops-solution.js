export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
    this.values = [...this.values, ...list.values];
    return this;
  }

  concat(listOfLists) {
    const newList = new List(this.values);
    listOfLists.values.forEach((list) => newList.append(list));
    return newList;
  }

  filter(func) {
    const filtered = [];

    for (const val of this.values) {
      if (func(val)) {
        filtered.push(val);
      }
    }

    return new List(filtered);
  }

  map(func) {
    const mapped = [];

    for (const val of this.values) {
      mapped.push(func(val));
    }

    return new List(mapped);
  }

  length() {
    return this.values.length;
  }

  foldl(func, val) {
    let acc = val;

    for (let i of this.values) {
      acc = func(acc, i);
    }

    return acc;
  }

  foldr(func, val) {
    let acc = val;

    for (let i = this.values.length - 1; i >= 0; i--) {
      acc = func(acc, this.values[i]);
    }

    return acc;
  }

  reverse() {
    let reversed = [];

    for (let i = this.values.length - 1; i >= 0; i--) {
      reversed.push(this.values[i]);
    }

    return new List(reversed);
  }
}
