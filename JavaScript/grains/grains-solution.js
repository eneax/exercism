export const square = (number) => {
  if (number < 1 || number > 64)
    throw new Error("square must be between 1 and 64");

  return 1n << BigInt(number - 1);
};

export const total = () => (1n << 64n) - 1n;
