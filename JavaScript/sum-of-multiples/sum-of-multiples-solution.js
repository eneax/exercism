export const sum = (factors, limit) => {
  const multiples = new Set();

  factors.forEach((factor) => {
    for (let i = 1; i < limit; i++) {
      if (i % factor === 0) {
        multiples.add(i);
      }
    }
  });

  return [...multiples].reduce((sum, multiple) => sum + multiple, 0);
};
