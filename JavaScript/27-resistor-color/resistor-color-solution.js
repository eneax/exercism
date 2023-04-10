export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export const colorCode = (color) => {
  if (COLORS.indexOf(color) === -1) {
    throw new Error("Invalid color");
  }

  return COLORS.indexOf(color);
};
