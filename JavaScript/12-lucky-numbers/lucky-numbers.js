// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const num1 = Number(array1.join(""));
  const num2 = Number(array2.join(""));

  return num1 + num2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const string = value.toString();
  const reversed = string.split("").reverse().join("");

  return string === reversed;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === undefined || input === null) {
    return "Required field";
  }

  if (input === "") {
    return "Required field";
  }

  if (Number(input) === 0) {
    return "Must be a number besides 0";
  }

  if (Number.isNaN(Number(input))) {
    return "Must be a number besides 0";
  }

  return "";
}
