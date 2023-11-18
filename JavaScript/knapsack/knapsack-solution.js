const maxValue = (limit, items, loot) => {
  if (limit === 0 || items.length === 0) return loot;

  let localItems = [...items];
  let obj = localItems.pop();

  if (obj.weight <= limit) {
    return Math.max(
      maxValue(limit - obj.weight, localItems, loot + obj.value),
      maxValue(limit, localItems, loot)
    );
  } else {
    return maxValue(limit, localItems, loot);
  }
};

export const knapsack = (maximumWeight, items) => {
  let sortedItems = [...items];
  sortedItems.sort((a, b) => a.value - b.value);

  let loot = maxValue(maximumWeight, sortedItems, 0);
  return loot;
};
