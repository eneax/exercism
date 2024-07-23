export const gamestate = (board) => {
  const gridSize = board.length;
  const boardString = board.join("");
  const [numberOfX, numberOfO] = [
    boardString.split("X").length - 1,
    boardString.split("O").length - 1,
  ];
  const scoringArray = Array(gridSize * 2 + 2).fill(null);
  const boardNumbers = board.flatMap((row) =>
    row
      .split("")
      .map((element) => (element === "X" ? 1 : element === "O" ? -1 : 0))
  );

  boardNumbers.forEach((element, index) => {
    const [row, col] = [Math.floor(index / gridSize), index % gridSize];
    scoringArray[row] += element;
    scoringArray[gridSize + col] += element;
    row === col && (scoringArray[2 * gridSize] += element);
    gridSize - 1 - col === row && (scoringArray[2 * gridSize + 1] += element);
  });

  switch (true) {
    case numberOfX - numberOfO > 1:
      throw new Error("Wrong turn order: X went twice");
    case numberOfX - numberOfO < 0:
      throw new Error("Wrong turn order: O started");
    case scoringArray.includes(gridSize) && scoringArray.includes(-gridSize):
      throw new Error(
        "Impossible board: game should have ended after the game was won"
      );
    case scoringArray.includes(gridSize) || scoringArray.includes(-gridSize):
      return "win";
    case boardNumbers.includes(0):
      return "ongoing";
    default:
      return "draw";
  }
};
