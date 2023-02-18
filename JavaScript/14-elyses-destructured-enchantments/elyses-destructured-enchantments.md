# Elyses Destructured Enchantments

## Array destructuring

Array destructuring is a convenient way to extract multiple values from an array and assign them to distinct variables.

```js
const numberOfMoons = [0, 2, 14];
const [venus, mars, neptune] = numberOfMoons;

neptune; // => 14
```

## Rest and spread

JavaScript has a built-in `...` operator that makes it easier to work with indefinite numbers of elements. Depending on the context, it's called either a rest operator or spread operator.

### Rest elements

When `...` appears on the left-hand side of an assignment, we have a rest element. It collects zero or more values, and stores them into a single array.

```js
const [a, b, ...everythingElse] = [0, 9, 1, 2, 3, 5, 8];
everythingElse; // => [1, 2, 3, 5, 8]
```

Note: a rest element must be the last element in a destructuring assignment.

### Spread elements

When `...` appears on the right-hand side of an assignment, it's known as the spread operator. It expands an array into a list of elements. Unlike the rest element, it can appear anywhere in an array literal expression, and there can be more than one.

```js
const oneToFive = [1, 2, 3, 4, 5];
const oneToTen = [...oneToFive, 6, 7, 8, 9, 10];

oneToTen; // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
