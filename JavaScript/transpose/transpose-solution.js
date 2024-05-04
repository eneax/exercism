const getMaxLength = (input) => {
  return input.reduce(
    (maxLength, { length }) => Math.max(maxLength, length),
    0
  );
};

export const transpose = (input) => {
  return Array.from(Array(getMaxLength(input)), (_, i) =>
    input.reduce(
      (transposedText, text, j) =>
        transposedText +
        (text[i]?.padStart(j - transposedText.length + 1, " ") || ""),
      ""
    )
  );
};
