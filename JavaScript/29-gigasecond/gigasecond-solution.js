/*
  - Determine the date and time one gigasecond after a certain date.
  - A gigasecond is one thousand million seconds.
  If you were born on January 24th, 2015 at 22:00 (10:00:00pm), then you would be a gigasecond old on October 2nd, 2046 at 23:46:40 (11:46:40pm).
*/

const GIGASECOND = 1e12;

export const gigasecond = (date) => new Date(date.getTime() + GIGASECOND);
