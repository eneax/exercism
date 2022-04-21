# Freelancer Rates

JavaScript has only two numeric types:

- `number`: like `-6`, `-2.4`, `0`, `0.1`, `1`, `3.14`, `16.984025`, `25`, `1024.0` and `500000`.

- `bigint`: like `-12n`, `0n`, `4n`, and `900719991n`.

## Rounding

JavaScript has a built-in global object called `Math` that provides various rounding functions. For example, you can round down (`floor`) or round up (`ceil`) decimal numbers to the nearest whole numbers.

```js
Math.floor(234.34); // => 234
Math.ceil(234.34); // => 235
```

## Arithmetic Operators

JavaScript provides 6 different operators to perform basic arithmetic operations on numbers.

`+`: The addition operator is used to find the sum of numbers.
`-`: The subtraction operator is used to find the difference between two numbers
`*`: The multiplication operator is used to find the product of two numbers.
`/`: The division operator is used to divide two numbers.
`%`: The remainder operator is used to find the remainder of a division performed.

```js
40 % 4; // => 0
-11 % 4; // => -3
```

`**`: The exponentiation operator is used to raise a number to a power.

```js
4 ** 3; // => 64
4 ** 1 / 2; // => 2
```

## Order of Operations

JavaScript uses the `PEDMAS` (Parentheses, Exponents, Division/Multiplication, Addition/Subtraction) rule we've learnt in elementary math classes.

## Shorthand Assignment Operators

Shorthand assignment operators are a shorter way of writing code conducting arithmetic operations on a variable, and assigning the new value to the same variable. For example, consider two variables `x` and `y`. Then, `x += y` is same as `x = x + y`.

```js
let x = 5;
x += 25; // x is now 30

let y = 31;
y %= 3; // y is now 1
```
