/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */

const PIZZAS = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10,
};

const EXTRAS = {
  ExtraSauce: 1,
  ExtraToppings: 2,
};

export function pizzaPrice(pizza, ...extras) {
  // base case: if there are no extras, return the price of the pizza
  if (extras.length === 0) {
    return PIZZAS[pizza];
  }

  // recursive case: if there are extras, add the price of the extra to the price of the pizza
  const [extra, ...rest] = extras;
  return EXTRAS[extra] + pizzaPrice(pizza, ...rest);
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce((total, pizzaOrder) => {
    const { pizza, extras } = pizzaOrder;
    return total + pizzaPrice(pizza, ...extras);
  }, 0);
}
