export const eggCount = (displayValue) => {
  const binaryString = displayValue.toString(2);
  const count = binaryString.split("").filter((bit) => bit === "1").length;
  return count;
};
