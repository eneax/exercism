export default class CircularBuffer {
  constructor(desiredSize) {
    this.element = [];
    this.size = desiredSize;
  }

  write(newElement) {
    if (this.element.length >= this.size) throw new BufferFullError();
    this.element.push(newElement);
  }

  read() {
    if (this.element.length === 0) throw new BufferEmptyError();
    return this.element.shift();
  }

  forceWrite(newElement) {
    while (this.element.length >= this.size) this.element.shift();
    this.element.push(newElement);
  }

  clear() {
    this.element = [];
  }
}

export class BufferFullError extends Error {}
export class BufferEmptyError extends Error {}
