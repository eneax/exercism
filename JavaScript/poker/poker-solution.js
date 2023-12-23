const CARDS = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

const count = (arr) =>
  arr.reduce((cs, x) => ((cs[x] = (cs[x] ?? 0) + 1), cs), {});

const digit = (d) =>
  d <= 9 ? d : String.fromCharCode("a".charCodeAt(0) + d - 10);

const pokerRank = (hand) => {
  let ranks = hand
    .split(" ")
    .map((card) => 2 + CARDS.indexOf(card.slice(0, -1)))
    .sort((a, b) => b - a);

  if (ranks == "14,5,4,3,2") {
    ranks = [5, 4, 3, 2, 1];
  }

  const counts = Object.values(count(ranks)).sort((a, b) => b - a);

  const isStraight =
    counts.length == 5 && 4 == Math.max(...ranks) - Math.min(...ranks);

  const isFlush =
    1 == new Set(hand.split(" ").map((card) => card.slice(-1))).size;

  const cards = Object.entries(count(ranks))
    .sort((a, b) => b[1] - a[1])
    .map(([x, _]) => digit(Number(x)));

  switch (true) {
    case counts == "5":
      return [9];
    case isStraight && isFlush:
      return [8, ...cards];
    case counts == "4,1":
      return [7, ...cards];
    case counts == "3,2":
      return [6, ...cards];
    case isFlush:
      return [5, ...cards];
    case isStraight:
      return [4, ...cards];
    case counts[0] == 3:
      return [3, ...cards];
    case counts == "2,2,1":
      if (cards[0] < cards[1]) [cards[0], cards[1]] = [cards[1], cards[0]];
      return [2, ...cards];
    case counts[0] == 2:
      return [1, ...cards];
    default:
      return [0, ...cards];
  }
};

export const bestHands = (hands) => {
  let best = String(hands.map(pokerRank).sort().at(-1));

  return hands.filter((hand) => pokerRank(hand) == best);
};
