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

export const decodedValue = (colors) => {
  if (colors.some((color) => COLORS.indexOf(color) === -1)) {
    throw new Error("Invalid color");
  }

  const [firstColor, secondColor] = colors;
  const firstColorIndex = COLORS.indexOf(firstColor);
  const secondColorIndex = COLORS.indexOf(secondColor);

  return parseInt(`${firstColorIndex}${secondColorIndex}`);
};
