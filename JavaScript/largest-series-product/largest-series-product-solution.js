export const largestProduct = (digits, span) => {
  if (span > digits.length) {
    throw new Error("Span must be smaller than string length");
  }

  if (span < 0) {
    throw new Error("Span must be greater than zero");
  }

  if (digits.match(/\D/)) {
    throw new Error("Digits input must only contain digits");
  }

  if (span === 0) {
    return 1;
  }

  let largestProduct = 0;
  for (let i = 0; i < digits.length - span + 1; i++) {
    let product = 1;
    for (let j = 0; j < span; j++) {
      product *= parseInt(digits[i + j]);
    }

    if (product > largestProduct) {
      largestProduct = product;
    }
  }

  return largestProduct;
};
