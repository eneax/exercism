## Translation Service - Promise

The Promise object represents the eventual completion (or failure) of an asynchronous operation and the resulting value.

The `promise.then()`, `promise.catch()` and `promise.finally()` methods are used to associate further actions with a promise that becomes resolved.

For example:

```js
const myPromise = new Promise(function (resolve, reject) {
  let sampleData = [2, 4, 6, 8];
  let randomNumber = Math.ceil(Math.random() * 5);

  if (sampleData[randomNumber]) {
    resolve(sampleData[randomNumber]);
  } else {
    reject("An error occurred!");
  }
});

myPromise
  .then((e) => console.log(e))
  .catch((error) => throw new Error(error))
  .finally(() => console.log("Promise completed"));
```

## Methods

Methods available on `Promise.prototype`:

### [then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)

The `.then()` method takes up to two arguments:

- the first argument is a callback function for the resolved case of the promise
- the second argument is a callback function for the rejected case.

Each `.then()` returns a newly generated promise object, which can optionally be used for chaining:

```js
const promise1 = new Promise((resolve, reject) => {
  resolve("Success!");
});

promise1.then((value) => {
  console.log(value); // "Success!"
});
```

### [catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)

A `.catch()` is just a `.then()` without a slot for a callback function for the case when the promise is resolved. It is used to handle rejected promises:

```js
const promise1 = new Promise((resolve, reject) => {
  throw "An error occurred";
});

promise1.catch((error) => {
  console.error(error); // An error occurred
});
```

### [finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

When the promise is settled (either fulfilled or rejected), the specified callback function is executed. This provides a way for code to be run whether the promise was fulfilled successfully or rejected once the `Promise` has been dealt with.

```js
function findDataById(id) {
  return new Promise((resolve, reject) => {
    let sampleData = [1, 2, 3, 4, 5];

    if (sampleData[id]) {
      resolve(sampleData[id]);
    } else {
      reject(new Error("Invalid id"));
    }
  });
}

findDataById(4)
  .then((response) => console.log(response))
  .catch((err) => console.error(err))
  .finally(() => console.log("Promise completed"));
```
