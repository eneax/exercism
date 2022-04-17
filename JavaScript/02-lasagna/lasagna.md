# Lucian's Luscious Lasagna

JavaScript is a dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

## Introduction

There are a few primary ways to assign values to names in JavaScript - using variables or constants. On Exercism, **variables** are always written in `camelCase`; **constants** are written in `SCREAMING_SNAKE_CASE`.

Variables in JavaScript can be defined using the `const`, `let` or `var` keyword.

A **variable** can reference different values over its lifetime when using `let` or `var`. For example, `myFirstVariable` can be defined and redefined many times using the assignment operator `=`:

```js
let myFirstVariable = 1;
myFirstVariable = "Some string";
myFirstVariable = new SomeComplexClass();
```

In contrast to `let` and `var`, variables that are defined with `const` can only be assigned once. This is used to define constants in JavaScript.

```js
const MY_FIRST_CONSTANT = 10;

// Can not be re-assigned.
MY_FIRST_CONSTANT = 20;
// => TypeError: Assignment to constant variable.
```

## Function Declarations

In JavaScript, units of functionality are encapsulated in functions, usually grouping functions together in the same file if they belong together.
These functions can take parameters (`arguments`), and can return a value using the `return` keyword. Functions are invoked using `()` syntax.

```js
function add(num1, num2) {
  return num1 + num2;
}

add(1, 3);
// => 4
```

## Exposing to Other Files

To make a function, a constant, or a variable available in other files, they need to be exported using the `export` keyword. Another file may then import these using the `import` keyword. This is also known as the `module system`.

A great example is how all the tests work. Each exercise has at least one file, for example `lasagna.js`, which contains the implementation. Additionally there is at least one other file, for example `lasagna.spec.js`, that contains the tests. This file imports the public (i.e. exported) entities in order to test the implementation:

```js
// file.js
export const MY_VALUE = 10;

export function add(num1, num2) {
  return num1 + num2;
}

// file.spec.js
import { MY_VALUE, add } from "./file";

add(MY_VALUE, 5);
// => 15
```
