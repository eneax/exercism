# Lucky Numbers

In JavaScript, values can have different types. You can change the type of a value using explicit type conversion and implicit type conversion (type coercion).

## Type Conversion

`Boolean`, `Number` and `String` can be used as functions to convert a value to the desired type.

### Converting to a Boolean (Truthy/Falsy Values)

With `Boolean(value)` you can convert any value to a `boolean`.

There is a fixed set of values (`false`, `0`, empty `string`, `null`, `undefined` and `NaN`) called **falsy** values, that convert to false.

For all other values, `Boolean` returns `true`. These values are called **truthy**.

```js
Boolean(-1); // => true
Boolean(0); // => false
Boolean(" "); // => true
Boolean(""); // => false
```

Note that because of the described rules, `'0'`, `'false'`, `[]` and `{}` are truthy in JavaScript.

### Converting to a Number

`Number(value)` can be used to convert a value to a number.

White spaces at the beginning and the end of a `string` are ignored and an empty `string` is converted to `0`.

If you try to convert a non-primitive value or a `string` that does not represent a number, the result is `NaN` ([Not-A-Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)).

```js
Number("  -12.34  "); // => -12.34
Number("1,2"); // => NaN
Number(""); // => 0
Number({ num: 123 }); // => NaN
```

### Converting to a String

With `String(value)` you can convert a value to a `string`.

```js
String(12.34); // => '12.34'
String(false); // => 'false'
String(null); // => 'null'
String(undefined); // => 'undefined'
```

For `arrays`, the `String` function will apply the `string` conversion for each element and `join` the results with a comma.

Note that in these cases `null` and `undefined` will be converted to an empty `string`.

```js
String([42, null, true, "abc"]); // => '42,,true,abc'
```

For objects, by default `String` returns `'[object Object]'`.

```js
String({ key: "value" }); // => '[object Object]'
```

## Type Coercion

In certain situations, JavaScript will automatically convert a value to another data type before it evaluates some statement. This implicit conversion is called type coercion.

### Boolean Context

When a non-boolean value is used in a boolean context, JavaScript will apply the same rules as the `Boolean` function to implicitly convert the value.

Coercion to boolean commonly occurs for:

- the condition of an `if` statement
- the first operand of the ternary operator `?`
- the operand of the logical NOT operator `!`
- the operands of the logical AND `&&` and OR `||` operators

```js
const num = 0;
if (num) {
  // this block is NOT executed because 0 is falsy
}
```

### String Context

If the addition operator `+` is used for primitive values and one operand is a `string`, the other one will be coerced into a `string` as well.

The conversion logic is the same as when using the `String` function and afterwards, the two strings are concatenated.

```js
let name;
"hello " + name; // => 'hello undefined'
```

### Numeric Context

Many operators coerce the operands into numbers (if necessary) according to the logic of the `Number` function explained above.

- Arithmetic operators: `+` (if no string is involved), `-`, `*`, `/`, `%`, `**`
- Unary plus and unary negation operators: `+`, `-`
- Relational operators (for non-string operands): `>`, `>=`, `<`, `<=`
- Bitwise operators: `|`, `&`, `^`, `~`

For more details about these operator refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators).
