# Windowing System

JavaScript includes the features for object-oriented programming ([OOP](https://en.wikipedia.org/wiki/Object-oriented_programming)).
In OOP, objects (`instances`) are created from templates (`classes`) so that they include certain data and functionality. Data properties are called `fields`, while function properties are called `methods`.

JavaScript allowed object-oriented programming using prototype-based inheritance before the `class` keyword was added to the language specification in 2015.

## Constructor Function

When a function is supposed to be used as such a template, it is called a `constructor` function and the convention is that the function name should start with a capital letter. Instances (`objects`) are derived from the template using the `new` keyword when invoking the `constructor` function.

```js
function Car() {
  // ...
}

const myCar = new Car();
const yourCar = new Car();
```

It is important to note that in JavaScript, the instances and the constructor function keep a relationship to each other even after the instances were created. Every instance object includes a hidden, internal property referred to as `[[prototype]]` in the language specification.

This means that constructing a new instance creates an object with a relation to its constructor called its `prototype`.

It holds a reference to the value of the `prototype` key of the constructor function. Note that a JavaScript function can have key/value pairs because it is also an object behind the scenes.

## Instance Fields

Often, you want all the derived objects (instances) to include some fields and pass some initial values for those when the object is constructed. This can be facilitated via the [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) keyword. Inside the constructor function, `this` represents the new object that will be created via `new`. `this` is automatically returned from the constructor function when it is called with `new`.

That means we can add fields to the new instance by adding them to `this` in the constructor function.

```js
function Car(color, weight) {
  this.color = color;
  this.weight = weight;
  this.engineRunning = false;
}

const myCar = new Car("red", "2mt");
myCar.color; // => 'red'
myCar.engineRunning; // => false
```
