export class ComplexNumber {
  constructor(real, imag) {
    this._real = real;
    this._imag = imag;
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imag;
  }

  add(num) {
    const real = this._real + num.real;
    const imag = this._imag + num.imag;

    return new ComplexNumber(real, imag);
  }

  sub(num) {
    const real = this._real - num.real;
    const imag = this._imag - num.imag;

    return new ComplexNumber(real, imag);
  }

  div(num) {
    return new ComplexNumber(
      (this._real * num.real + this._imag * num.imag) / num.abs ** 2,
      (this._imag * num.real - this._real * num.imag) / num.abs ** 2
    );
  }

  mul(num) {
    const real = this._real * num.real - this._imag * num.imag;
    const imag = this._imag * num.real + this._real * num.imag;

    return new ComplexNumber(real, imag);
  }

  get abs() {
    return (this._real ** 2 + this._imag ** 2) ** 0.5;
  }

  get conj() {
    return new ComplexNumber(this._real, 0 - this._imag);
  }

  get exp() {
    return new ComplexNumber(
      Math.E ** this._real * Math.cos(this._imag),
      Math.E ** this._real * Math.sin(this._imag)
    );
  }
}
