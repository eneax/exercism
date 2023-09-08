export class BankAccount {
  constructor() {
    this._balance = 0;
    this._isOpen = false;
  }

  open() {
    if (this._isOpen) throw new ValueError();
    this._isOpen = true;
  }

  close() {
    if (!this._isOpen) throw new ValueError();
    this._isOpen = false;
    this._balance = 0;
  }

  deposit(amount) {
    if (!this._isOpen || amount < 0) throw new ValueError();
    this._balance += amount;
  }

  withdraw(amount) {
    if (!this._isOpen || amount < 0 || amount > this._balance) {
      throw new ValueError();
    }
    this._balance -= amount;
  }

  get balance() {
    if (!this._isOpen) throw new ValueError();
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
