export const convert = (number) => {
  let sound = "";

  if (number % 3 === 0) sound += "Pling";

  if (number % 5 === 0) sound += "Plang";

  if (number % 7 === 0) sound += "Plong";

  if (sound === "") sound = number.toString();

  return sound;
};
