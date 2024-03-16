const SHARPS_SCALE = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
];
const FLATS_SCALE = [
  "A",
  "Bb",
  "B",
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
];
const INTERVAL_MAPPINGS = { m: 1, M: 2, A: 3 };

export class Scale {
  constructor(tonic) {
    this.tonic = tonic;
  }

  chromatic() {
    const scale = this.determineScale();
    const index = scale.indexOf(
      this.tonic.charAt(0).toUpperCase() + this.tonic.slice(1)
    );
    return [...scale.slice(index, scale.length), ...scale.slice(0, index)];
  }

  interval(intervals) {
    const chromaticScale = this.chromatic();
    let result = [chromaticScale[0]];

    let currentIndex = 0;
    [...intervals].forEach((interval) => {
      currentIndex += INTERVAL_MAPPINGS[interval] ?? 0;
      if (currentIndex >= chromaticScale.length)
        currentIndex -= chromaticScale.length;
      result.push(chromaticScale[currentIndex]);
    });
    return result;
  }

  determineScale = () =>
    [
      "C",
      "G",
      "D",
      "A",
      "E",
      "B",
      "F#",
      "a",
      "e",
      "b",
      "f#",
      "c#",
      "g#",
      "d#",
    ].includes(this.tonic)
      ? SHARPS_SCALE
      : FLATS_SCALE;
}
