import { faker } from "@faker-js/faker";
import fs from "fs";

function generateUser() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    gender: faker.person.gender(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
  };
}

const users = Array.from({ length: 200 }, generateUser);

fs.writeFileSync(
  "./mock/users.js",
  "export default " + JSON.stringify(users, null, 2),
);
