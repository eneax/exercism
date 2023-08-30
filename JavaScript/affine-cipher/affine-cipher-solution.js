const modMulInverse = (a, b) => {
  if (!coprime(a, b)) throw new Error("a and m must be coprime.");

  let output = 1;

  while ((a * output) % 26 != 1) {
    output += 1;
  }

  return output;
};

const coprime = (a, b) => gcd(a, b) == 1;

const gcd = (a, b) => {
  if (a == 0 || b == 0) return 0;

  if (a == b) return a;

  if (a > b) return gcd(a - b, b);

  return gcd(a, b - a);
};

export const encode = (phrase, { a, b }) => {
  if (!coprime(a, 26)) throw new Error("a and m must be coprime.");

  const output = [];

  phrase = phrase.toLowerCase();

  for (let index = 0; index < phrase.length; index++) {
    let x = phrase.charCodeAt(index);

    if (x < 48 || x > 122 || (x > 57 && x < 97)) continue;

    if ((output.length + 1) % 6 === 0) output.push(32);

    if (x < 97) {
      output.push(x);
      continue;
    }

    x -= 97;

    output.push(((a * x + b) % 26) + 97);
  }

  return String.fromCharCode(...output);
};

export const decode = (phrase, { a, b }) => {
  const mmi = modMulInverse(a, 26);

  const output = [];

  for (let index = 0; index < phrase.length; index++) {
    let y = phrase.charCodeAt(index);

    if (y === 32) continue;

    if (y < 97) {
      output.push(y);
      continue;
    }

    y -= 97;

    let sum = mmi * (y - b);

    while (sum < 0) {
      sum += 26;
    }

    output.push((sum % 26) + 97);
  }

  return String.fromCharCode(...output);
};
