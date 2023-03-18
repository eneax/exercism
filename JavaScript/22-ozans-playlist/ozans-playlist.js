// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */

export function removeDuplicates(playlist) {
  const uniqueTracks = new Set(playlist);
  return [...uniqueTracks];
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */

export function hasTrack(playlist, track) {
  const uniqueTracks = new Set(playlist);
  return uniqueTracks.has(track);
}
