// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature}! Overheating!`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */

export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new Error();
  }
}
