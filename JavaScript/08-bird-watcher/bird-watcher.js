// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

// ! To practice, use a "for loop" solve each of the tasks below.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export const totalBirdCount = (birdsPerDay) => {
  let birdCount = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    birdCount += birdsPerDay[i];
  }
  return birdCount;
};

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export const birdsInWeek = (birdsPerDay, week) => {
  const DAYS_IN_WEEK = 7;
  let birdCount = 0;
  for (let i = (week - 1) * DAYS_IN_WEEK; i < week * DAYS_IN_WEEK; i++) {
    birdCount += birdsPerDay[i];
  }
  return birdCount;
};

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export const fixBirdCountLog = (birdsPerDay) => {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i] = birdsPerDay[i] + 1;
    }
  }
  return birdsPerDay;
};
