/* eslint-disable no-unused-vars */
import { Person } from "./person";
import { Name } from "./name";
import { Born } from "./born";
import { Address } from "./address";
import { Lens } from "./lens";

export const nameLens = new Lens(
  (person) => person.name,
  (person, value) => new Person(value, person.born, person.address)
);

export const bornAtLens = new Lens(
  (person) => person.born.bornAt,
  (person, value) =>
    new Person(person.name, new Born(value, person.born.bornOn), person.address)
);

export const streetLens = new Lens(
  (person) => person.address.street,
  (person, value) =>
    new Person(
      person.name,
      person.born,
      new Address(
        person.address.number,
        value,
        person.address.city,
        person.address.country
      )
    )
);
