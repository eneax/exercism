const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const ALPHABET_LENGTH = ALPHABET.length;

export class Cipher {
  constructor(key = null) {
    this._key = key || this.generateKey();
  }

  encode(plainText) {
    return Array.from(plainText)
      .map((value, index) => {
        const n =
          this.letterIndex(value) +
          this.letterIndex(this._key[index % this._key.length]);

        return ALPHABET.charAt(n % ALPHABET_LENGTH);
      })
      .join("");
  }

  decode(cipherText) {
    return Array.from(cipherText)
      .map((value, index) => {
        const n =
          this.letterIndex(value) -
          this.letterIndex(this.key[index % this._key.length]);
        return ALPHABET.charAt((n + ALPHABET_LENGTH) % ALPHABET_LENGTH);
      })
      .join("");
  }

  get key() {
    return this._key;
  }

  generateKey(length = 10) {
    return [...Array(length)].map((_) => this.randomLetter()).join("");
  }

  randomLetter() {
    return ALPHABET.charAt(Math.floor(Math.random() * ALPHABET_LENGTH));
  }

  letterIndex(letter) {
    return ALPHABET.indexOf(letter);
  }
}
