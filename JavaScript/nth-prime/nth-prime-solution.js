const isPrime = (n) => {
  if (n < 2) return false;
  if (n === 2) return true;

  const max = Math.sqrt(n);

  for (let i = 2; i <= max; i++) {
    if (n % i === 0) return false;
  }

  return true;
};

export const prime = (n) => {
  if (n < 1) throw new Error("there is no zeroth prime");

  let count = 0;
  let i = 2;

  while (count < n) {
    if (isPrime(i)) {
      count++;
    }

    i++;
  }

  return i - 1;
};
