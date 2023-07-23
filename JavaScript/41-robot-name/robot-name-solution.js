export class Robot {
  static _namePool = new Map();

  constructor() {
    this._name = this._newName();
  }

  _randomName() {
    const letters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    const numbers = [..."0123456789"];

    return (
      letters[~~(Math.random() * 26)] +
      letters[~~(Math.random() * 26)] +
      numbers[~~(Math.random() * 10)] +
      numbers[~~(Math.random() * 10)] +
      numbers[~~(Math.random() * 10)]
    );
  }

  _newName() {
    let name;
    do {
      name = this._randomName();
    } while (Robot._namePool.has(name));
    Robot._namePool.set(name, true);
    return name;
  }

  reset() {
    this._name = this._newName();
  }

  get name() {
    return this._name;
  }
}

Robot.releaseNames = () => {
  Robot._namePool = new Map();
};
