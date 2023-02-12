# Lasagna Master

A function is a block of organized and reusable code that performs a specific task.

## Function declarations

The standard way of defining a function in JavaScript is a function declaration, also called function definition or function statement.

It consists of the keyword `function`, the name of the function, and the list of parameters in round brackets separated by a comma. This is followed by the body of the function (set of instructions that define what a function does) enclosed in curly brackets.

```js
function someName(param1, param2, param3) {
  // ...
}
```

In JavaScript, a function is invoked (called) by stating the function name followed by parentheses that contain the arguments.

```js
someName(arg1, arg2, arg3);
```

### Parameters

- Values of [primitive data types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) are immutable. The original value is never affected by what happens to the argument in the function body.

- For all other values (`objects`, `arrays`, `functions`), a reassignment will not affect the original value. However, if you modify such an argument (e.g. add a key to an `object`), that also modifies the original value that was passed in.

All parameters defined in the function declaration are optional by default. If you provide fewer arguments than there are parameters, the missing arguments will be `undefined` inside the function.

In many cases, it makes sense to assign a more appropriate default value than `undefined`. This can be done by specifying default parameters directly in the function definition.

```js
function someName(param1 = defaultValue1, param2 = defaultValue2) {
  // ...
}
```

### Return Statement

A return statement ends the function execution and specifies a value to be returned to the function caller. A function can have multiple return statements.

```js
function checkNumber(num) {
  if (num === 0) {
    return "You passed 0, please provide another number.";
  }

  return "Thanks for passing such a nice number.";
}
```

The result of a function that returns no value or does not have a return statement is `undefined`.

```js
function nakedReturn(a) {
  a * 2;
  return;
}
nakedReturn(1); // => undefined

function noReturn(a) {
  a * 2;
}
noReturn(1); // => undefined
```

In JavaScript, you can only return exactly one value. If you want to pass more information, you need to combine it into one entity first, usually into an `object`, or an `array`.

```js
function divide(a, b) {
  return {
    quotient: Math.floor(a / b),
    remainder: a % b,
  };
}
```

## Function Expression

A function declaration is a standalone statement. But sometimes it is helpful to define a function as part of another expression, e.g., in an assignment, as a function parameter (`callback`) or as value in an `object`. This can be done with a function expression. It has the same syntax as a function declaration, only that the function name can be omitted to create an anonymous function.

```js
const someFunction = function (param) {
  // ...
};

someOtherFunction(function (param) {
  // ...
});

const obj = {
  someFunction: function (param) {
    // ...
  },
};
```
