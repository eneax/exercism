export class List {
  constructor(input = []) {
    this.list = input;
  }

  compare(otherList) {
    if (this.list.length === otherList.list.length) {
      return this.list.toString() === otherList.list.toString()
        ? "EQUAL"
        : "UNEQUAL";
    } else if (this.list.length < otherList.list.length) {
      return this.isSublist(this.list, otherList.list) ? "SUBLIST" : "UNEQUAL";
    } else {
      return this.isSublist(otherList.list, this.list)
        ? "SUPERLIST"
        : "UNEQUAL";
    }
  }

  isSublist(listA, listB) {
    if (listA.length === 0) return true;

    const listAStr = listA.toString();

    for (let i = 0; i <= listB.length - listA.length; i++) {
      const listBStr = listB.slice(i, i + listA.length).toString();

      if (listAStr === listBStr) return true;
    }

    return false;
  }
}
