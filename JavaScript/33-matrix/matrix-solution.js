export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  get rows() {
    return this.matrix.split("\n").map((row) => row.split(" ").map(Number));
  }

  get columns() {
    return this.rows[0].map((_, i) => this.rows.map((row) => row[i]));
  }
}
