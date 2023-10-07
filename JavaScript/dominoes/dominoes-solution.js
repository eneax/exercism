const makeChain = (first, next, dominoes) => {
  if (!dominoes.some((stone) => stone.includes(first))) return [];

  const candidates = Array(dominoes.length).fill([]);
  for (let [i, stone] of dominoes.entries()) {
    if (!stone.includes(next)) continue;

    stone = stone[0] === next ? stone : [...stone].reverse();

    candidates[i] = [stone].concat(
      makeChain(first, stone[1], [
        ...dominoes.slice(0, i),
        ...dominoes.slice(i + 1),
      ])
    );
  }

  return candidates.find((c) => c.length === dominoes.length) || [];
};

export const chain = (dominoes) => {
  if (dominoes.length === 0) {
    return dominoes;
  } else if (dominoes.length === 1) {
    return dominoes[0][0] === dominoes[0][1] ? dominoes : null;
  }

  const stone = dominoes[0];

  const chain = [stone].concat(
    makeChain(stone[0], stone[1], dominoes.slice(1))
  );

  return chain.length === dominoes.length ? chain : null;
};
