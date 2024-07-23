# Lens Person

In JavaScript, lenses are a functional programming concept that allows you to access and modify data in a modular and immutable way. They are essentially composable pairs of pure getter and setter functions that focus on a particular field inside an object.

Lenses can be used to simplify code, make it more reusable, and avoid common programming errors. For example, lenses can be used to:

- Access and modify nested data structures without having to worry about the specific structure of the data.
- Update data in a pure way, without mutating the original object.
- Compose multiple lenses together to create more complex lenses that can access and modify data in a variety of ways.

## Instructions

Use lenses to update nested records (specific to languages with immutable data).

Updating fields of nested, immutable records is kind of annoying.
The code for such cases is as cumbersome as the structure is deep.
If you have, say, a Person, that contains an Address, which has a Street, that has a Number, updating the Number requires creating a new Street with the new Number, then a new Address with the new Street and, finally, a new Person with the new Address.
Confused already?

One solution to this problem is to use [lenses][lenses].

Implement several record accessing functions using lenses.
The test suite also allows you to avoid lenses altogether so you can experiment with different approaches.

[lenses]: https://en.wikibooks.org/wiki/Haskell/Lenses_and_functional_references
