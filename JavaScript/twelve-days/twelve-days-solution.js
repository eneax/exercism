const DAYS = [
  "",
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth",
];

const GIFTS = [
  "",
  "a Partridge in a Pear Tree.\n",
  "two Turtle Doves, and ",
  "three French Hens, ",
  "four Calling Birds, ",
  "five Gold Rings, ",
  "six Geese-a-Laying, ",
  "seven Swans-a-Swimming, ",
  "eight Maids-a-Milking, ",
  "nine Ladies Dancing, ",
  "ten Lords-a-Leaping, ",
  "eleven Pipers Piping, ",
  "twelve Drummers Drumming, ",
];

const sentence = (number) => {
  const day = DAYS[number];
  const gift = GIFTS.filter((_, i) => i <= number)
    .reverse()
    .join("");

  return `On the ${day} day of Christmas my true love gave to me: ${gift}`;
};

export const recite = (from, to = from) => {
  return [...Array(to + 1).keys()]
    .slice(from, to + 1)
    .map(sentence)
    .join("\n");
};
