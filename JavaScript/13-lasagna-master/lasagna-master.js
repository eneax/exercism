/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
// Task 1
export function cookingStatus(timer) {
  if (timer === 0) {
    return "Lasagna is done.";
  } else if (timer === undefined) {
    return "You forgot to set the timer.";
  } else {
    return "Not done, please wait.";
  }
}

// Task 2
export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}
