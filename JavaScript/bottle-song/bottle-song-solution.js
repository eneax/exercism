//
// This is only a SKELETON file for the 'Bottle Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const NUMBERS = [
  null,
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
];

export const recite = (initialBottlesCount, takeDownCount) => {
  const result = [];

  for (
    let count = initialBottlesCount, i = 0;
    i < takeDownCount;
    count--, i++
  ) {
    result.push(
      `${NUMBERS[count]} green bottle${
        count > 1 ? "s" : ""
      } hanging on the wall,`
    );
    result.push(result[result.length - 1]);
    result.push(`And if one green bottle should accidentally fall,`);

    if (count === 1) {
      result.push(`There'll be no green bottles hanging on the wall.`);
    } else {
      result.push(
        `There'll be ${NUMBERS[count - 1].toLowerCase()} green bottle${
          count > 2 ? "s" : ""
        } hanging on the wall.`
      );
    }

    if (i < takeDownCount - 1) {
      result.push("");
    }
  }

  return result;
};
