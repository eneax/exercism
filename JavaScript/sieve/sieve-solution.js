export const primes = (n) => {
  const numbers = [...Array(n + 1).keys()].slice(2);
  const primes = [];

  while (numbers.length > 0) {
    const prime = numbers.shift();
    primes.push(prime);
    numbers.forEach((number, index) => {
      if (number % prime === 0) {
        numbers.splice(index, 1);
      }
    });
  }

  return primes;
};
