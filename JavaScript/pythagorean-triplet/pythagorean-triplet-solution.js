export function triplets({ minFactor, maxFactor, sum }) {
  let out = [];

  for (let a = minFactor || 1; a < (maxFactor || sum); a++) {
    for (let b = a; b < (maxFactor || sum); b++) {
      let c = Math.sqrt(a ** 2 + b ** 2);
      if (
        a + b + c == sum &&
        (maxFactor ? c < maxFactor : true) &&
        (minFactor ? c > minFactor : true)
      ) {
        out.push(new Triplet(a, b, c));
      }
    }
  }

  return out;
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}
