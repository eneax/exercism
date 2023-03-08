# Custom Signs

Template strings allow you to embed expressions in strings (string interpolation) and extends the functionality of the built-in [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) global object.

You can create template strings by wrapping text, variables and logic in backticks (``):

```js
const num1 = 1;
const num2 = 2;

console.log(`Adding ${num1} and ${num2} gives ${num1 + num2}.`);
// Adding 1 and 2 gives 3.
```

The `${...}` is the placeholder that is used for substitution. Any non-string types are implicitly converted to strings.

```js
const track = "JavaScript";

`This track on exercism.org is ${track.toUpperCase()}.`;
// => This track on exercism.org is JAVASCRIPT.
```

Template strings are also useful for creating multi-line strings:

```js
`This is an example of using template
strings to accomplish multiple
lines`;
```

You can even introduce logic into the process by using a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).

It is a short form for writing an `if/else` statement. The syntax is: `condition ? consequent-expression : alternative-expression`. If the condition is truthy, the operand on the left-hand side of the colon will be returned. Otherwise, the result of the ternary expression is the operand on the right-hand side of the colon.

```js
const track = "JavaScript";

`This track on exercism.org is ${
  track === "JavaScript" ? "awesome" : "not awesome"
}.`;
// => This track on exercism.org is awesome.
```
