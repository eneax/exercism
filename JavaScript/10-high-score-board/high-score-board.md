# High Score Board

## Objects

Objects are collections of key-value pairs. In JavaScript, the type of the key must be a string, while the values within an object can have different types, such as numbers, strings, booleans, arrays, other objects, or even functions.

### Creating an Object

You create an object using curly brackets.

```js
const emptyObject = {};

const obj = {
  favoriteNumber: 42,
  greeting: "Hello World",
  useGreeting: true,
  address: {
    street: "Trincomalee Highway",
    city: "Batticaloa",
  },
  fruits: ["melon", "papaya"],
  addNumbers: function (a, b) {
    return a + b;
  },
};
```

### Retrieving a Value

There are two ways to retrieve the value for a given key: `dot` notation and `bracket` notation.

```js
const obj = { greeting: "hello world" };

obj.greeting; // => hello world
obj["greeting"]; // => hello world

const key = "greeting";
obj[key]; // => hello world
```

### Adding or Changing a Value

You can add or change a value using the assignment operator `=`.

```js
const obj = { greeting: "hello world" };

obj.greeting = "Hi there!";
obj["greeting"] = "Welcome.";

obj.newKey1 = "new value 1";
obj["new key 2"] = "new value 2";

const key = "new key 3";
obj[key] = "new value 3";
```

### Deleting an Entry

You can delete a key-value pair from an object using the `delete` keyword.

```js
const obj = {
  key1: "value1",
  key2: "value2",
};

delete obj.key1;
delete obj["key2"];
```

### Checking Whether a Key Exists

You can check whether a certain key exists in an object with the `hasOwnProperty` method.

```js
const obj = { greeting: "hello world" };

obj.hasOwnProperty("greeting"); // => true
obj.hasOwnProperty("age"); // => false
```

### Iterating Over an Object

There is a special `for...in` loop to iterate over all keys of an object.

```js
const obj = {
  name: "Ali",
  age: 65,
};

for (let key in obj) {
  console.log(key, obj[key]);
}
// name Ali
// age 65
```
