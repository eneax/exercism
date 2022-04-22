# Poetry Club Door Policy

A string is the JavaScript data type to store text data.

## Creating a String

You create a string by wrapping the text in single quotes or double quotes.

```js
"Hello, World!";
"Hello, World!";
```

## Strings as Lists of Characters

A string can be treated as a list of characters where the first character has index 0. You can access an individual character of the string using square brackets and the index of the letter you want to retrieve.

```js
"cat"[1];
// => 'a'
```

You can determine the number of characters in a string by accessing the length property.

```js
"cat".length;
// => 3
```

## Concatenation and Methods

The simplest way to concatenate strings is to use the addition operator `+`.

```js
"I like" + " " + "cats.";
// => "I like cats."
```

Strings provide a lot of helper methods, see [MDN Docs on String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods) for a full list. The following list shows some commonly used helpers.

- `toUpperCase` and `toLowerCase`: change the case of all characters
- `trim`: remove whitespace at the beginning and end
- `includes`, `startsWith` and `endsWith`: determine whether another string is part of the given string
- `slice`: extract a section of the string

Strings are `immutable` in JavaScript. So any "modification" will always create a new string instead.
