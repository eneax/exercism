export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = { value, next: null };

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  pop() {
    if (this.head === null) {
      return undefined;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (previousNode === null) {
      this.head = null;
      this.tail = null;
    } else {
      previousNode.next = null;
      this.tail = previousNode;
    }

    this.length--;
    return currentNode.value;
  }

  shift() {
    if (this.head === null) {
      return undefined;
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return value;
  }

  unshift(value) {
    const node = { value, next: this.head };
    this.head = node;

    if (this.tail === null) {
      this.tail = node;
    }

    this.length++;
  }

  delete(value) {
    if (this.head === null) {
      return undefined;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;

      if (this.length === 0) {
        this.tail = null;
      }

      return;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode !== null && currentNode.value !== value) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      return undefined;
    }

    previousNode.next = currentNode.next;

    if (previousNode.next === null) {
      this.tail = previousNode;
    }

    this.length--;
  }

  count() {
    return this.length;
  }
}
