// Constants used in the code
const CORNER = "+";
const HORIZONTAL = "-";
const VERTICAL = "|";
const MIDDLE = "s";

// Valid characters for horizontal lines
const VALID_HORIZONTALS = [CORNER, HORIZONTAL];

// Check if a cross section is valid for a given length
const isValidCrossOfLength = (length) => (crossSection) =>
  new RegExp(
    `[\\${CORNER}\\${VERTICAL}]` + // Start with a corner or vertical line
      `[\\${VERTICAL}\\${MIDDLE}\\${CORNER}\\${HORIZONTAL}]{${length}}` + // Followed by a valid sequence of characters
      `[\\${CORNER}\\${VERTICAL}]` // End with a corner or vertical line
  ).test(crossSection);

// Check if a rectangle is valid for a given length
const isValidRectangleOfLength = (length) => (crossSection) =>
  new RegExp(
    `\\${CORNER}` + // Start with a corner
      `[\\${CORNER}\\${HORIZONTAL}]{${length}}` + // Followed by a valid sequence of characters
      `\\${CORNER}` // End with a corner
  ).test(crossSection);

// Count the number of rectangles in a plane
export const count = (plane = []) =>
  plane.reduce((rectangles, [...cross], crossInd) => {
    // Count the number of rectangles in a cross section
    const countInSection = cross.reduce((count, char, charInd) => {
      if (char === CORNER) {
        // Check for valid horizontal lines
        for (const [i, nextChar] of [...cross.entries()].slice(charInd + 1)) {
          if (!VALID_HORIZONTALS.includes(nextChar)) break;
          if (nextChar === CORNER) {
            // Check for valid cross sections and rectangles
            for (const nextCross of plane.slice(crossInd + 1)) {
              const possibleCross = nextCross.slice(charInd, i + 1);
              if (!isValidCrossOfLength(i - charInd - 1)(possibleCross)) break;
              if (isValidRectangleOfLength(i - charInd - 1)(possibleCross))
                count++;
            }
          }
        }
      }

      return count;
    }, 0);

    return rectangles + countInSection;
  }, 0);
