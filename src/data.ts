import faker from 'faker';
import { Listing } from './types';

const getListings = (count = 100) => {
  const result: Listing[] = [];
  for (let i = 0; i < count; i += 1) {
    result.push({
      id: faker.random.uuid(),
      line1: faker.address.streetAddress(true),
      price: faker.random.number({ min: 500000, max: 5000000 }),
    });
  }
  return result;
};

export { getListings };
