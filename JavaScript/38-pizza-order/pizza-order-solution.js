/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */

export function pizzaPrice(pizza, ...extras) {
  // base case: if there are no extras, return the price of the pizza
  if (extras.length === 0) {
    switch (pizza) {
      case "Margherita":
        return 7;
      case "Caprese":
        return 9;
      case "Formaggio":
        return 10;
      default:
        throw new Error("Invalid pizza");
    }
  }

  // recursive case: if there are extras, add the price of the extra to the price of the pizza
  const [firstExtra, ...restOfExtras] = extras;

  switch (firstExtra) {
    case "ExtraSauce":
      return 1 + pizzaPrice(pizza, ...restOfExtras);
    case "ExtraToppings":
      return 2 + pizzaPrice(pizza, ...restOfExtras);
    default:
      throw new Error("Invalid extra");
  }
}
