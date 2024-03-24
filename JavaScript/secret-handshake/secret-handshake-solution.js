export const commands = (number) => {
  const actions = ["wink", "double blink", "close your eyes", "jump"];
  const binary = number.toString(2);
  const handshake = [];

  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === "1") {
      const actionIndex = binary.length - 1 - i;

      if (actionIndex < actions.length) {
        handshake.push(actions[actionIndex]);
      }
    }
  }

  if (
    binary.length > actions.length &&
    binary[binary.length - actions.length - 1] === "1"
  ) {
    handshake.reverse();
  }

  return handshake;
};
