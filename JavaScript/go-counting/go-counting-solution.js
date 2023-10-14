Array.prototype.includesArr = function (other) {
  return this.some((arr) => JSON.stringify(arr) === JSON.stringify(other));
};

export class GoCounting {
  constructor(board) {
    this.board = board;
    this.onBoard = (x, y) =>
      0 <= x && x < board[0].length && 0 <= y && y < board.length;
    this.generateGraph();
  }

  generateGraph() {
    let graph = {};
    const DIRS = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];

    for (let y = 0; y < this.board.length; y++) {
      for (let x = 0; x < this.board[0].length; x++) {
        graph[[x, y]] = [];

        for (const dir of DIRS) {
          let [newX, newY] = [x + dir[0], y + dir[1]];

          if (this.onBoard(newX, newY)) {
            graph[[x, y]].push([newX, newY]);
          }
        }
      }
    }

    this.graph = graph;
  }

  dfsBoard(x, y) {
    let [visited, queue, border] = [[], [], []];

    if (this.board[y][x] == " ") {
      visited.push([x, y]);
      queue.push([x, y]);
    }

    while (queue.length > 0) {
      for (const neighbour of this.graph[queue.shift()]) {
        if (!visited.includesArr(neighbour)) {
          let target = this.board[neighbour[1]][neighbour[0]];

          if (target === " ") {
            visited.push(neighbour);
            queue.push(neighbour);
          } else border.push(target);
        }
      }
    }

    return [visited, border];
  }

  getTerritory(x, y) {
    if (!this.onBoard(x, y)) return { error: "Invalid coordinate" };

    let [visited, border] = this.dfsBoard(x, y);

    let territory = {};
    let borderPieces = Array.from(new Set(border));

    if (borderPieces.length === 1) {
      if (borderPieces[0] === "B") territory.owner = "BLACK";
      if (borderPieces[0] === "W") territory.owner = "WHITE";
    } else {
      territory.owner = "NONE";
    }

    territory.territory = visited
      .sort((a, b) => a[1] - b[1])
      .sort((a, b) => a[0] - b[0]);

    return territory;
  }

  getTerritories() {
    let territories = {
      territoryBlack: [],
      territoryWhite: [],
      territoryNone: [],
    };

    for (let y = 0; y < this.board.length; y++) {
      for (let x = 0; x < this.board[0].length; x++) {
        let currTerritory = this.getTerritory(x, y);

        currTerritory["territory"].forEach((x) => {
          switch (currTerritory.owner) {
            case "BLACK":
              if (!territories["territoryBlack"].includesArr(x))
                territories["territoryBlack"].push(x);
              break;
            case "WHITE":
              if (!territories["territoryWhite"].includesArr(x))
                territories["territoryWhite"].push(x);
              break;
            case "NONE":
              if (!territories["territoryNone"].includesArr(x))
                territories["territoryNone"].push(x);
              break;
          }
        });
      }
    }

    return territories;
  }
}
