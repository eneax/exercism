const DIRECTIONS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [-1, -1],
  [-1, 1],
  [1, -1],
];

function formatResult([start, end]) {
  return {
    start: [start[0] + 1, start[1] + 1],
    end: [end[0] + 1, end[1] + 1],
  };
}

export default class WordSearch {
  constructor(grid) {
    this.grid = grid.map((row) => row.split(""));
    this.rows = this.grid.length;
    this.cols = this.grid[0].length;
  }

  find(words) {
    return words.reduce((result, word) => {
      result[word] = this.findWord(word);
      return result;
    }, {});
  }

  findWord(word) {
    for (let row = 0; row < this.rows; row += 1) {
      for (let col = 0; col < this.cols; col += 1) {
        const scanResult = this.scan(word, [row, col]);
        if (scanResult) return formatResult(scanResult);
      }
    }

    return undefined;
  }

  scan(word, start) {
    for (let direction = 0; direction < 8; direction += 1) {
      const scanResult = this.scanDirection(word, start, direction);
      if (scanResult) return scanResult;
    }

    return undefined;
  }

  scanDirection(word, start, direction) {
    let wordIndex = 0;
    let current = start;

    while (this.at(current) === word[wordIndex]) {
      wordIndex += 1;
      if (wordIndex === word.length) return [start, current];
      current = this.nextIndex(current, direction);
    }

    return undefined;
  }

  nextIndex([row, col], direction) {
    const [drow, dcol] = DIRECTIONS[direction];
    return [row + drow, col + dcol];
  }

  at([row, col]) {
    return this.grid[row]?.[col];
  }
}
