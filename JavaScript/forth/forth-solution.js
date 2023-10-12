export class Forth {
  constructor() {
    // Initialize the queue, buffer, and defines arrays
    this.queue = [];
    this.buffer = [];
    this.defines = [];

    // Define the basic arithmetic operations and stack manipulation commands
    this["+"] = () => this.op(2, (a, b) => [a + b]);
    this["-"] = () => this.op(2, (a, b) => [a - b]);
    this["*"] = () => this.op(2, (a, b) => [a * b]);
    this["/"] = () =>
      this.op(2, (a, b) => {
        if (b === 0) throw new Error("Division by zero");
        return [Math.floor(a / b)];
      });
    this["dup"] = () => this.op(1, (a) => [a, a]);
    this["drop"] = () => this.op(1, (a) => undefined);
    this["swap"] = () => this.op(2, (a, b) => [b, a]);
    this["over"] = () => this.op(2, (a, b) => [a, b, a]);
  }

  // Helper function for performing operations on the buffer
  op(no, fn) {
    if (this.buffer.length < no) throw new Error("Stack empty");
    return fn(...this.buffer.splice(-no));
  }

  // Evaluate a command, either by defining a new operation or running an existing one
  evaluate(cmd) {
    /^:.*;$/.test(cmd) ? this.define(cmd) : this.run(cmd);
  }

  // Define a new operation
  define(command) {
    // Parse the parameters from the command string
    const params = command
      .split(" ")
      .slice(1, -1)
      .map((v) => (isNaN(v) ? v.toLowerCase() : Number(v)));

    // Get the new operation name and check that it's valid
    let newOp = params.shift();
    if (!isNaN(newOp)) throw new Error("Invalid definition");

    // Replace any defined operations in the parameter list with their results
    let result = params.map((p) =>
      this.defines.includes(p) ? this[p]()[0] : p
    );

    // Define the new operation
    this[newOp] = () => result;
    this.defines.push(newOp);
  }

  // Run a command
  run(command) {
    // Parse the command into the queue
    this.queue = command
      .split(" ")
      .map((v) => (isNaN(v) ? v.toLowerCase() : Number(v)));

    // Process the queue
    while (this.queue.length > 0) {
      let v = this.queue.shift();
      if (isNaN(v)) {
        // If the value is not a number, it's a command
        if (!this[v]) throw new Error("Unknown command");
        let result = this[v]();
        if (result) this.queue.unshift(...result);
      } else {
        // If the value is a number, add it to the buffer
        this.buffer.push(v);
      }
    }
  }

  // Get the current stack
  get stack() {
    return this.buffer;
  }
}
