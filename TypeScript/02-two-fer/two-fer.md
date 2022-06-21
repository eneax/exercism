# Two Fer

```ts
function twoFer(): string {}
```

The function `twoFer()` has a return type of `string`. It means that the type of the value returned by the function is `string`.

```ts
function twoFer(name = "you"): string {
  return `One for ${name}, one for me.`;
}
```

Here, the `dueFer()` function takes a single `name` parameter of type `string`, which is set to `"you"` by default.

In this case, it is not necessary to specify the type of the `name` parameter, because TypeScript automatically infers it from the return type.
