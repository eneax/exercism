export const hey = (message) => {
  message = message.trim();
  if (message === "") {
    return "Fine. Be that way!";
  }

  const isQuestion = message.endsWith("?");
  const isShouting =
    message === message.toUpperCase() && message !== message.toLowerCase();

  if (isQuestion && isShouting) {
    return "Calm down, I know what I'm doing!";
  }

  if (isQuestion) {
    return "Sure.";
  }

  if (isShouting) {
    return "Whoa, chill out!";
  }

  return "Whatever.";
};
