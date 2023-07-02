/// <reference path="./global.d.ts" />
//
// @ts-check

/**
Instructions

You run a pizza shop, and offer three types of pizzas:

- Margherita: $7
- Caprese: $9
- Formaggio: $10

If customers want, they can add an unlimited number of extra options: either "ExtraSauce" for $1 or "ExtraToppings" for $2.

Your task is to write code that assists the customer in figuring out the cost to them.
*/

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  throw new Error("Please implement the pizzaPrice function");
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  throw new Error("Please implement the orderPrice function");
}
