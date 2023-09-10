export const find = (array, value) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (array[middle] === value) {
      return middle;
    }

    if (array[middle] < value) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  throw new Error("Value not in array");
};
