export class Board {
  constructor(board) {
    this.board = board.map((line) => {
      return line.replace(/\s+/g, "").split("");
    });
  }

  pathExists(start, end, symbol) {
    let visited = this.board.map((row) => row.map((el) => false));
    let stack = [start];
    visited[start[0]][start[1]] = true;
    let neighbors;

    while (stack.length !== 0) {
      let popped = stack.pop();
      if (popped[0] === end[0] && popped[1] === end[1]) return true;

      neighbors = this.getNeighbors(popped, symbol);

      for (let neighbor of neighbors) {
        if (!visited[neighbor[0]][neighbor[1]]) {
          stack.push(neighbor);
          visited[neighbor[0]][neighbor[1]] = true;
        }
      }
    }

    return false;
  }

  getNeighbors(position, symbol) {
    let [row, col] = position;
    let positions = [
      [row - 1, col],
      [row - 1, col + 1],
      [row, col - 1],
      [row, col + 1],
      [row + 1, col - 1],
      [row + 1, col],
    ];

    return positions.filter(
      ([nRow, nCol]) =>
        Boolean(this.board[nRow]?.[nCol]) && this.board[nRow][nCol] === symbol
    );
  }

  winner() {
    for (let upCol = 0; upCol < this.board[0].length; upCol++) {
      const downRow = this.board.length - 1;

      if (this.board[0][upCol] === "O") {
        for (let downCol = 0; downCol < this.board[0].length; downCol++) {
          if (this.board[downRow][downCol] === "O") {
            if (
              this.pathExists([0, upCol], [this.board.length - 1, downCol], "O")
            ) {
              return "O";
            }
          }
        }
      }
    }

    for (let leftRow = 0; leftRow < this.board.length; leftRow++) {
      const rightCol = this.board[0].length - 1;

      if (this.board[leftRow][0] === "X") {
        for (let rightRow = 0; rightRow < this.board.length; rightRow++) {
          if (this.board[rightRow][rightCol] === "X") {
            if (this.pathExists([leftRow, 0], [rightRow, rightCol], "X")) {
              return "X";
            }
          }
        }
      }
    }

    return "";
  }
}
