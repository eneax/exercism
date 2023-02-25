# Fruit Picker

## Callback functions

Callback functions are functions passed as arguments to other functions.
This is a common pattern that creates a sequence of function calls in both synchronous and asynchronous programming.

```js
// Callback function add takes two arguments and returns their sum
function add(x, y) {
  return x + y;
}

// Callback function subtract takes two arguments and returns their difference
function subtract(x, y) {
  return x - y;
}

// Callback function multiply takes two arguments and returns their product
function multiply(x, y) {
  return x * y;
}

// Callback function divide takes two arguments and returns their quotient
function divide(x, y) {
  return x / y;
}

// The caller function (calculate) takes a callback function (operation)
function calculate(x, y, operation) {
  return operation(x, y);
}

calculate(10, 5, add); // 15
calculate(10, 5, subtract); // 5
calculate(10, 5, multiply); // 50
calculate(10, 5, divide); // 2
```
