const findSumOfDivisors = (number) => {
  // 1 has no proper divisors
  if (number === 1) return 0;

  let sum = 1; // Start with 1 as 1 is a divisor of all numbers
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      sum += i;
      if (i !== number / i) {
        sum += number / i;
      }
    }
  }
  return sum;
};

export const classify = (number) => {
  if (number <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  }

  const sumOfDivisors = findSumOfDivisors(number);

  if (sumOfDivisors === number) {
    return "perfect";
  } else if (sumOfDivisors > number) {
    return "abundant";
  } else {
    return "deficient";
  }
};
