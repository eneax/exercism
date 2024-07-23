export const truncate = (input) => {
  const str = String(input);
  const truncatedArray = Array.from(str).slice(0, 5);
  return truncatedArray.join("");
};
