# Elyses Analytic Enchantments

## Arrow Functions

Arrow functions are a new syntax for defining functions in JavaScript.
Here is a comparison between a function declaration and an arrow function.

```js
function sum(num1, num2) {
  return num1 + num2;
}

// function keyword removed and => added
const sum = (num1, num2) => {
  return num1 + num2;
};
```

If the function body contains only a return statement, like in the example above, the `{}` and the `return` keyword can be omitted. If there is only one parameter, the parenthesis `()` can be omitted as well.

```js
const sum = (num1, num2) => num1 + num2;
const square = (num) => num * num;
```

Arrow functions are often used to define short callback functions directly in the function call.

```js
applyToSquare((number) => number * number);
```

## Array Analysis

Arrays have built-in methods to analyze the contents of the array.

Some other helpful built-in methods that are available to analyze an array are shown below. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods) for a full list of array methods.

### indexOf

```js
const numbers = [1, "two", 3, "four"];
numbers.indexOf("two"); // => 1
```

### includes

The `includes()` method determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.

```js
const numbers = [1, "two", 3, "four"];
numbers.includes(1); // => true
numbers.includes("one"); // => false
```

### every

The `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a `Boolean` value.

```js
const numbers = [1, 3, 5, 7, 9];
numbers.every((num) => num % 2 !== 0); // => true
```

### some

The `some()` method tests whether at least one element in the array passes the test implemented by the provided function.

```js
const numbers = [1, 3, 5, 7, 9];
numbers.some((num) => num % 2 !== 0); // => true
```

### find

The `find()` method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, `undefined` is returned.

```js
const numbers = [1, 3, 5, 7, 9];
numbers.find((num) => num < 5); // => 1
```

### findIndex

The `findIndex()` method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns `-1`, indicating that no element passed the test.

```js
const numbers = [1, 3, 5, 7, 9];
numbers.findIndex((num) => num > 7); // => 4
numbers.findIndex((num) => num > 9); // => -1
```
