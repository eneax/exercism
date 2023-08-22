# Mixed Juices

## While Loops

The `while` loop executes a block of code repeatedly as long as a condition is true.

```js
while (condition) {
  // execute this code repeatedly as long as the condition is true
}
```

The `do-while` loop, instead, executes the code block at least once and then repeatedly as long as the condition is true.

```js
do {
  // The code executes once and then repeatedly while the condition is true
} while (condition);
```

Inside a loop, you can use the `break` keyword to stop the execution of the loop entirely or the `continue` keyword to stop the execution of the current iteration and proceed with the next one.

```js
let i = 0;

while (i < 100) {
  i = i + 2;

  if (i % 3 === 0) {
    continue;
  }
}
```

## Switch Statements

It is used to compare a variable to multiple variants using strict equality (`===`).

```js
switch (x) {
  case option1:
    // code that is executed when "x === option1" is true
    break;
  case option2:
    // code that is executed when "x === option2" is true
    break;
  default:
  // code that is executed when x does not equal any of the options
  // the default case is optional
}
```

The `break` statement is used to stop the execution of the switch statement. If you omit the `break` statement, the code will continue to execute even if the condition did not match an option.
