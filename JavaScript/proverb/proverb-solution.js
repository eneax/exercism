export const proverb = (...words) => {
  if (!words.length) return "";

  const lines = [];
  let qualifier = "";

  if (words[words.length - 1].qualifier) {
    qualifier = words.pop().qualifier + " ";
  }

  for (let i = 0; i < words.length - 1; i++) {
    lines.push(`For want of a ${words[i]} the ${words[i + 1]} was lost.`);
  }
  lines.push(`And all for the want of a ${qualifier}${words[0]}.`);

  return lines.join("\n");
};
