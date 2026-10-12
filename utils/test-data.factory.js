import { faker } from '@faker-js/faker';

export const testDataFactory = Object.freeze({
  email: () => `qa+${Date.now()}-${faker.string.alphanumeric(6).toLowerCase()}@example.com`,
  user: () => ({
    name: faker.person.fullName(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: `qa+${Date.now()}-${faker.string.alphanumeric(6).toLowerCase()}@example.com`,
    password: faker.internet.password({ length: 14 }),
    birthDay: String(faker.number.int({ min: 1, max: 28 })),
    birthMonth: String(faker.number.int({ min: 1, max: 12 })),
    birthYear: String(faker.number.int({ min: 1980, max: 2002 })),
    address1: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipcode: faker.string.numeric(5),
    mobile: faker.string.numeric(10),
  }),
  invalidCredentials: () => ({
    email: `missing-${faker.string.alphanumeric(8)}@example.invalid`,
    password: faker.internet.password(),
  }),
  contact: () => ({
    name: faker.person.fullName(),
    email: `contact+${Date.now()}@example.com`,
    subject: faker.lorem.words(4),
    message: faker.lorem.paragraph(),
  }),
  review: () => ({
    name: faker.person.firstName(),
    email: `review+${Date.now()}@example.com`,
    text: faker.lorem.sentences(2),
  }),
});
