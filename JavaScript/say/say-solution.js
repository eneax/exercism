const NUMBERS = new Map([
  [0, "zero"],
  [1, "one"],
  [2, "two"],
  [3, "three"],
  [4, "four"],
  [5, "five"],
  [6, "six"],
  [7, "seven"],
  [8, "eight"],
  [9, "nine"],
  [10, "ten"],
  [11, "eleven"],
  [12, "twelve"],
  [13, "thirteen"],
  [14, "fourteen"],
  [15, "fifteen"],
  [16, "sixteen"],
  [17, "seventeen"],
  [18, "eighteen"],
  [19, "nineteen"],
  [20, "twenty"],
  [30, "thirty"],
  [40, "forty"],
  [50, "fifty"],
  [60, "sixty"],
  [70, "seventy"],
  [80, "eighty"],
  [90, "ninety"],
]);

const sayHundreds = (num) => {
  if (NUMBERS.has(num)) return NUMBERS.get(num);

  let tens = NUMBERS.get(Math.floor(num / 10) * 10);
  let ones = NUMBERS.get(num % 10);

  return `${tens}-${ones}`;
};

const sayThousands = (num) => {
  if (num < 100) return sayHundreds(num);

  let b = num % 100;
  let h = Math.floor((num - b) / 100);
  let res = `${sayHundreds(h)} hundred`;
  if (b != 0) res += ` ${sayHundreds(b)}`;

  return res;
};

export const say = (num) => {
  if (num < 0 || num > 999_999_999_999)
    throw new Error("Number must be between 0 and 999,999,999,999.");
  if (num < 1000) return sayThousands(num);

  let seg1 = num % 1000;
  let seg2 = Math.floor(((num % 1_000_000) - seg1) / 1000);
  let seg3 = Math.floor(((num % 1_000_000_000) - seg2 - seg1) / 1_000_000);
  let seg4 = Math.floor((num - seg3 - seg2 - seg1) / 1_000_000_000);
  let ret = [];

  if (seg4 != 0) ret.push(`${sayThousands(seg4)} billion`);
  if (seg3 != 0) ret.push(`${sayThousands(seg3)} million`);
  if (seg2 != 0) ret.push(`${sayThousands(seg2)} thousand`);
  if (seg1 != 0) ret.push(sayThousands(seg1));

  return ret.join(" ");
};
