export const encode = (str) => {
  let encoded = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) count++;
    else {
      if (count > 1) encoded += count;
      encoded += str[i];
      count = 1;
    }
  }

  return encoded;
};

export const decode = (str) => {
  let decoded = "";
  let count = "";

  for (let i = 0; i < str.length; i++) {
    if (Number.isInteger(parseInt(str[i]))) count += str[i];
    else {
      if (count) {
        decoded += str[i].repeat(count);
        count = "";
      } else decoded += str[i];
    }
  }

  return decoded;
};
