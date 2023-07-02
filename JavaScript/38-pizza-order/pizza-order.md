# Pizza Order

## Introduction

Recursive functions are functions that call themselves.

Suppose that you have a function called `recurse`. This function is recursive if it calls itself inside its body:

```js
function recurse() {
  // ...
  recurse();
  // ...
}
```

A recursive function usually has a condition to stop calling itself and return a value, known as a base case. If a base case is missing, in most cases, because it will call itself indefinitely, it would be able to run forever.

In reality, in most of those situations, you will end up with a `StackSize error`: an error raised by the runtime because the stack of function calls has grown beyond a predefined limit because each recursive call adds to this stack until it returns (and it doesn't). The message of this error is `Maximum call stack size exceeded`.

```js
function recurse() {
  if (baseCondition) {
    // stop calling itself
    //...
  } else {
    recurse();
  }
}
```

Recursive functions often can be used instead of `for` loops for more succinct code. For example, take a countdown:

```js
function countDown(fromNumber) {
  for (let i = fromNumber; i > 0; i--) {
    console.log(i);
  }
}

countDown(3); // 3, 2, 1
```

We could solve this using recursion too:

```js
function countDown(fromNumber) {
  console.log(fromNumber);

  if (fromNumber > 1) {
    countDown(fromNumber - 1);
  }
}

countDown(3); // same result
```

Here, our base case is when `fromNumber` is `1`, in which case we don't call `countDown` again.

Apart from just displaying numbers, recursive functions can be used for more complicated procedures, such as keeping a sum or total.

```js
function sum(n) {
  if (n <= 1) {
    return n;
  }
  return n + sum(n - 1);
}

sum(3); // 6
```

## Extra

When the JavaScript interpreter is running the code, it will keep track of which functions it has entered (started to call) on a data structure called a `stack`. When the function returns (ends), it is removed from the `stack`.

However, this `stack` has a limited size. The most common mistake made is a recursive function that never ends. Each call is placed on the `stack`, but before it returns, another call is placed on the `stack`.

```js
function kaboom() {
  kaboom();
}

kaboom(); // => RangeError: Maximum call stack size exceeded
```

The stacktrace of this error shows the same line over and over, which makes sense, because the function calls itself. You can find out how tall that stack can get:

```js
let calls = 0;

function kaboom() {
  calls += 1;
  kaboom();
}

kaboom(); // => RangeError: Maximum call stack size exceeded

console.log(calls); // => a number, generally higher than 10.000
```

There are only two viable solutions to a call stack error caused by a synchronous recursive function:

- ensure the functions return before the stack limit is reached, usually by adding or fixing a base case
- rewrite the recursive function to an imperative loop, which will execute the body of the loop, without having to enter a function, thus without increasing the stack.
