const validate = (number) => {
  const errors = new Map([
    [/[a-zA-Z]/, "Letters not permitted"],
    [/[@:!]/, "Punctuations not permitted"],
    [/^\d{1,9}$/, "Incorrect number of digits"],
    [/^\d{12,}$/, "More than 11 digits"],
    [/^[^1]\d{10}$/, "11 digits must start with 1"],
    [/^0/, "Area code cannot start with zero"],
    [/^1/, "Area code cannot start with one"],
    [/^\d{3}0/, "Exchange code cannot start with zero"],
    [/^\d{3}1/, "Exchange code cannot start with one"],
  ]);

  errors.forEach((message, regEx) => {
    if (regEx.test(number)) throw new Error(message);
  });
};

export const clean = (number) => {
  number = number.replace(/[+()-\s.]/g, "");
  number = number.replace(/1(?=\d{10})/g, "");

  validate(number);

  return number;
};
