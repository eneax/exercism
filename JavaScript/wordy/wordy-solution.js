export const answer = (input) => {
  let numbers = input.match(/[-]?[0-9]+/gim);
  let operations = input.match(/(multiplied|plus|minus|divided)/g);

  if (input.match(/(What\sis\s)[0-9]+(\?)/gim) !== null) {
    return Number(numbers[0]);
  }

  if (
    input.match(/^(What)/g) === null ||
    (operations === null && input.match(/[a-z\s]+[0-9]+/g) !== null)
  ) {
    throw new Error("Unknown operation");
  }

  if (
    input.match(/[-]?[0-9]+\s[-]?[0-9]+/gim) !== null ||
    (numbers === null && operations === null)
  ) {
    throw new Error("Syntax error");
  }

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Number(numbers[i]);
  }
  let result = numbers.shift();

  if (numbers.length != operations.length) {
    throw new Error("Syntax error");
  }

  for (let i = 0; i < numbers.length; i++) {
    switch (operations[i]) {
      case "plus":
        result += numbers[i];
        break;
      case "minus":
        result -= numbers[i];
        break;
      case "multiplied":
        result = result * numbers[i];
        break;
      case "divided":
        result = result / numbers[i];
        break;
      default:
        break;
    }
  }

  return result;
};
