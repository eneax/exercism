export class BinarySearchTree {
  constructor(value) {
    this.value = value;
  }

  get data() {
    return this.value;
  }

  insert(value) {
    const side = value <= this.value ? "left" : "right";

    if (this[side]) {
      this[side].insert(value);
    } else {
      this[side] = new BinarySearchTree(value);
    }
  }

  each(fun) {
    if (this.left) this.left.each(fun);
    fun(this.value);
    if (this.right) this.right.each(fun);
  }
}
