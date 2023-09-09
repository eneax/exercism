export const recite = (initialBottlesCount, takeDownCount) => {
  let verse = [];
  for (
    let i = initialBottlesCount;
    i > initialBottlesCount - takeDownCount;
    i--
  ) {
    if (i > 2) {
      verse.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
      verse.push(
        `Take one down and pass it around, ${
          i - 1
        } bottles of beer on the wall.`
      );
    } else if (i == 2) {
      verse.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
      verse.push(
        `Take one down and pass it around, ${i - 1} bottle of beer on the wall.`
      );
    } else if (i == 1) {
      verse.push(`${i} bottle of beer on the wall, ${i} bottle of beer.`);
      verse.push(
        `Take it down and pass it around, no more bottles of beer on the wall.`
      );
    } else if (i == 0) {
      verse.push(
        `No more bottles of beer on the wall, no more bottles of beer.`
      );
      verse.push(
        `Go to the store and buy some more, 99 bottles of beer on the wall.`
      );
    }

    if (i > initialBottlesCount - takeDownCount + 1) {
      verse.push("");
    }
  }

  return verse;
};
