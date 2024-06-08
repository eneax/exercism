export const encode = (inputArr) => {
  let output = [];

  inputArr.forEach((n) => {
    let bits = n.toString(2);
    let spaced = bits
      .split("")
      .map((v, i) => ((bits.length - i) % 7 === 0 ? " " + v : v))
      .join("")
      .trim()
      .split(" ");
    let vlq = spaced.map((e, i) =>
      i === spaced.length - 1 ? parseInt(e, 2) : parseInt(e, 2) | 0b10000000
    );

    output = [...output, ...vlq];
  });

  return output;
};

export const decode = (inputArr) => {
  let output = [];

  if ((inputArr[inputArr.length - 1] & 0b10000000) === 128) {
    throw new Error("Incomplete sequence");
  }

  let sections = inputArr
    .map((n) =>
      (n & 0b10000000) === 128
        ? (n & 0b01111111).toString(2).padStart(7, "0")
        : (n & 0b01111111).toString(2).padStart(7, "0") + " "
    )
    .join("")
    .trim()
    .split(" ");

  let numbers = sections.map((n) => parseInt(n, 2));

  output = [...output, ...numbers];

  return output;
};
