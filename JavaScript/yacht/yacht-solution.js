export const score = (dice, category) => {
  let score = 0;
  let count = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < dice.length; i++) {
    count[dice[i] - 1]++;
  }

  switch (category) {
    case "yacht":
      if (count.includes(5)) {
        score = 50;
      }
      break;
    case "ones":
      score = count[0] * 1;
      break;
    case "twos":
      score = count[1] * 2;
      break;
    case "threes":
      score = count[2] * 3;
      break;
    case "fours":
      score = count[3] * 4;
      break;
    case "fives":
      score = count[4] * 5;
      break;
    case "sixes":
      score = count[5] * 6;
      break;
    case "full house":
      if (count.includes(3) && count.includes(2)) {
        score = dice.reduce((a, b) => a + b, 0);
      }
      break;
    case "four of a kind":
      for (let i = 0; i < count.length; i++) {
        if (count[i] >= 4) {
          score = (i + 1) * 4;
        }
      }
      break;
    case "little straight":
      if (
        count[0] == 1 &&
        count[1] == 1 &&
        count[2] == 1 &&
        count[3] == 1 &&
        count[4] == 1
      ) {
        score = 30;
      }
      break;
    case "big straight":
      if (
        count[1] == 1 &&
        count[2] == 1 &&
        count[3] == 1 &&
        count[4] == 1 &&
        count[5] == 1
      ) {
        score = 30;
      }
      break;
    case "choice":
      score = dice.reduce((a, b) => a + b, 0);
      break;
  }

  return score;
};
