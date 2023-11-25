export const isPaired = (input) => {
  const stack = [];
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (pairs[char]) {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
