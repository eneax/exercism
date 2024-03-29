export class Series {
  constructor(series) {
    if (series === "") {
      throw new Error("series cannot be empty");
    }
    this.series = series.split("").map(Number);
  }

  slices(size) {
    if (size > this.series.length) {
      throw new Error("slice length cannot be greater than series length");
    }
    if (size === 0) {
      throw new Error("slice length cannot be zero");
    }
    if (size < 0) {
      throw new Error("slice length cannot be negative");
    }

    const result = [];
    for (let i = 0; i <= this.series.length - size; i++) {
      result.push(this.series.slice(i, i + size));
    }
    return result;
  }
}
