export class Clock {
  constructor(hours, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
    this.normalize();
  }

  toString() {
    return `${this.pad(this.hours)}:${this.pad(this.minutes)}`;
  }

  plus(minutes) {
    this.minutes += minutes;
    this.normalize();
    return this;
  }

  minus(minutes) {
    this.minutes -= minutes;
    this.normalize();
    return this;
  }

  equals(other) {
    return this.hours === other.hours && this.minutes === other.minutes;
  }

  normalize() {
    const hoursFromMinutes = Math.floor(this.minutes / 60);
    this.hours += hoursFromMinutes;
    this.minutes -= hoursFromMinutes * 60;
    this.hours = this.hours % 24;

    if (this.hours < 0) {
      this.hours += 24;
    }

    if (this.minutes < 0) {
      this.minutes += 60;
      this.hours -= 1;
    }
  }

  pad(number) {
    return number.toString().padStart(2, "0");
  }
}
