# Coordinate Transformation

## Closures

Closures are a programming pattern which allows variables from an outer [lexical scope](<https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scoping>) to be used inside of a nested block of code.

```js
// Top-level declarations are global-scope
const dozen = 12;

{
  // Braces create a new block-scope
  // Referencing the outer variable is a closure.
  const twoDozen = dozen * 2;
}

// Functions create a new function-scope and block-scope.
// Referencing the outer variable here is a closure.
function nDozen(n) {
  return dozen * n;
}
```

Using a mutable variable declaration (like `let` or `var`) allows for some state to be preserved:

```js
let counter = 0;

// This function closure increments the counter's state in the outer lexical context.
// This way the counter can be shared between many calling contexts.
export function increment() {
  counter += 1;
  return counter;
}
```
