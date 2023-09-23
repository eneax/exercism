export class Crypto {
  constructor(text) {
    this._normalized = text.replace(/[\W]/g, "").toLowerCase();
  }

  normalizePlaintext() {
    return this._normalized;
  }

  size() {
    return Math.ceil(Math.sqrt(this._normalized.length));
  }

  plaintextSegments() {
    const size = this.size(),
      segments = [];

    for (let i = 0; i < size; i++) {
      if (this._normalized.length > i * size) {
        segments[i] = this._normalized.substring(i * size, (i + 1) * size);
      }
    }

    return segments;
  }

  get ciphertext() {
    const size = this.size();
    const chunks = this._normalized.split("").reduce((str, c, i) => {
      str[i % size] = (str[i % size] || "") + c;
      return str;
    }, []);
    const max_length = Math.max(...chunks.map((str) => str.length));

    return chunks.map((str) => str.padEnd(max_length)).join(" ");
  }
}
