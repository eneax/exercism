export class Element {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }

  set next(nextElement) {
    this._next = nextElement;
  }
}

export class List {
  constructor(array) {
    this._list = [];

    if (array) {
      array.forEach((e) => {
        this.add(new Element(e));
      });
    }
  }

  add(nextValue) {
    this._list.push(nextValue);
    if (this.length > 1) this.head.next = this._list[this.length - 2];
  }

  get length() {
    return this._list.length;
  }

  get head() {
    let retHead = this._list[this.length - 1];
    return retHead == undefined ? null : retHead;
  }

  toArray() {
    let retArray = [];
    let element = this.head;
    for (let i = this.length; i > 0; i--) {
      retArray.push(element.value);
      element = element.next;
    }

    return retArray;
  }

  reverse() {
    return new List(this.toArray());
  }
}
