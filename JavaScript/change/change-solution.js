export class Change {
  calculate(coins, target) {
    if (target < 0) {
      throw new Error("Negative totals are not allowed.");
    }

    const dp = Array(target + 1).fill(Infinity);
    dp[0] = 0;

    for (let coin of coins) {
      for (let i = coin; i <= target; i++) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }

    if (dp[target] === Infinity) {
      throw new Error(
        `The total ${target} cannot be represented in the given currency.`
      );
    }

    const result = [];
    let remaining = target;

    while (remaining > 0) {
      for (let coin of coins) {
        if (remaining >= coin && dp[remaining] === dp[remaining - coin] + 1) {
          result.push(coin);
          remaining -= coin;
          break;
        }
      }
    }

    return result;
  }
}
