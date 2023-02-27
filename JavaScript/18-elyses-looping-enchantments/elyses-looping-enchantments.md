# Elyses Looping Enchantments

When working with arrays, you sometimes want to execute code for each value in the array. This is called iterating or looping over the array.

Here we will look at the case where you do not want to modify the array in the process.

### The for Loop

The most basic way to iterate over an array is to use a `for` loop:

```js
const numbers = [6.0221515, 10, 23];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// => 6.0221515
// => 10
// => 23
```

### The for...of Loop

When you want to work with the value directly in each iteration and do not require the index at all, you can use a `for...of` loop.

```js
const numbers = [6.0221515, 10, 23];

for (const number of numbers) {
  console.log(number);
}
// => 6.0221515
// => 10
// => 23
```

Just like in regular `for` loops, you can use `continue` to stop the current iteration and `break` to stop the execution of the loop entirely.

### The forEach Method

Every array includes a `forEach` method that can be used to loop over the elements in the array.

`forEach` accepts a callback as a parameter. The callback function is called once for each element in the array. The current element, its index and the full array are provided to the callback as arguments.

```js
const numbers = [6.0221515, 10, 23];

numbers.forEach((number, index) => console.log(number, index));
// => 6.0221515 0
// => 10 1
// => 23 2
```

There is no way to stop the iteration once the `forEach` loop was started. The statements `break` and `continue` do not exist in this context.
