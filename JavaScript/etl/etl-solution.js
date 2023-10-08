export const transform = (old) => {
  let newObject = {};

  for (let key in old) {
    old[key].forEach((letter) => {
      newObject[letter.toLowerCase()] = Number(key);
    });
  }

  return newObject;
};
