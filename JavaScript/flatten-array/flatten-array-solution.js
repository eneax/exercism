export const flatten = (array) => {
  return array.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc.push(...flatten(curr));
    } else if (curr !== null && curr !== undefined) {
      acc.push(curr);
    }
    return acc;
  }, []);
};
