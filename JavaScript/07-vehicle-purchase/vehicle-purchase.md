# Vehicle Purchase

## Comparison

In JavaScript, numbers can be compared using the following relational and equality operators.

- Greater than: `a > b`
- Greater than or equals: `a >= b`
- Less than: `a < b`
- Less than or equals: `a <= b`
- (Strict) Equals: `a === b`
- Not (strict) equals: `a !== b`

The comparison result is always a boolean value: `true` or `false`.

```js
1 < 3; // => true

2 !== 2; // => false

1 === 1.0; // => true
// All numbers are floating-points, so this is different syntax for the exact same value.
```

The comparison operators above can also be used to compare strings. In that case, a dictionary (lexicographical) order is applied. You can find a list of the exact order of all the characters [here](https://www.fileformat.info/info/charset/UTF-16/list.htm).

```js
"Apple" > "Pear"; // => false

"a" < "above"; // => true

"a" === "A"; // => false
```

## Conditionals

A common way to conditionally execute logic in JavaScript is the `if`-statement. It consists of the `if` keyword, a condition wrapped in round brackets and a code block wrapped in curly brackets. The code block will only be executed if the condition evaluates to true.

```js
if (condition) {
  // code that is executed if "condition" is true
}
```

It can be used stand-alone or combined with the `else` keyword.

```js
if (condition) {
  // code that is executed if "condition" is true
} else {
  // code that is executed otherwise
}
```

To nest another condition into the `else` statement, you can use `else if`.

```js
if (condition1) {
  // code that is executed if "condition1" is true
} else if (condition2) {
  // code that is executed if "condition2" is true but "condition1" was false
} else {
  // code that is executed otherwise
}
```
