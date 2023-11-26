export const meetup = (year, month, descriptor, day) => {
  const daysInMonth = new Date(year, month, 0).getDate();
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ].indexOf(day);

  let count = 0;
  for (let i = 1; i <= daysInMonth; i++) {
    if (new Date(year, month - 1, i).getDay() === dayOfWeek) {
      count++;

      if (
        (descriptor === "teenth" && i >= 13 && i <= 19) ||
        (descriptor === "first" && count === 1) ||
        (descriptor === "second" && count === 2) ||
        (descriptor === "third" && count === 3) ||
        (descriptor === "fourth" && count === 4) ||
        (descriptor === "last" && i + 7 > daysInMonth)
      ) {
        return new Date(year, month - 1, i);
      }
    }
  }
};
