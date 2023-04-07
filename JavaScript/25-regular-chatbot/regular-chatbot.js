// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  const regex = /^chatbot, /i;
  return regex.test(command);
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */

export function removeEmoji(message) {
  const regex = /emoji\d+/g;
  return message.replace(regex, "");
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */

export function checkPhoneNumber(number) {
  const regex = /^(\(\+\d{2}\))\s\d{3}-\d{3}-\d{3}$/;
  const successMessage = "Thanks! You can now download me to your phone.";
  const errorMessage = `Oops, it seems like I can't reach out to ${number}`;

  return regex.test(number) ? successMessage : errorMessage;
}
