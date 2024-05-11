export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get isEquilateral() {
    return this.a === this.b && this.b === this.c && this.a !== 0;
  }

  get isIsosceles() {
    const [a, b, c] = [this.a, this.b, this.c].sort((x, y) => x - y);
    return a + b >= c && (a === b || b === c || a === c);
  }

  get isScalene() {
    const [a, b, c] = [this.a, this.b, this.c].sort((x, y) => x - y);
    return a + b >= c && a !== b && b !== c && a !== c;
  }

  get isDegenerate() {
    const [a, b, c] = [this.a, this.b, this.c].sort((x, y) => x - y);
    return a + b === c;
  }
}
