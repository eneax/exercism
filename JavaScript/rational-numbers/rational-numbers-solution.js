export class Rational {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add(r) {
    const a = this.a * r.b + r.a * this.b;
    const b = this.b * r.b;

    return new Rational(a, b).reduce();
  }

  sub(r) {
    const a = this.a * r.b - r.a * this.b;
    const b = this.b * r.b;

    return new Rational(a, b).reduce();
  }

  mul(r) {
    const a = this.a * r.a;
    const b = this.b * r.b;

    return new Rational(a, b).reduce();
  }

  div(r) {
    const a = this.a * r.b;
    const b = r.a * this.b;

    return new Rational(a, b).reduce();
  }

  abs() {
    return new Rational(Math.abs(this.a), Math.abs(this.b));
  }

  exprational(n) {
    const a = this.a ** (n >= 0 ? n : Math.abs(n));
    const b = this.b ** (n >= 0 ? n : Math.abs(n));

    return new Rational(a, b).reduce();
  }

  expreal(x) {
    return Math.round(Math.pow(x ** this.a, 1 / this.b) * 100) / 100;
  }

  reduce() {
    const gcd = findGCD(this.a, this.b);

    let a = this.a / gcd;
    let b = this.b / gcd;

    if (a < 0 && b < 0) {
      a = Math.abs(a);
      b = Math.abs(b);
    }

    if (a > 0 && b < 0) {
      a *= -1;
      b = Math.abs(b);
    }

    return new Rational(a, b);
  }
}

export const findGCD = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b) {
    let t = b;
    b = a % b;
    a = t;
  }

  return a;
};
