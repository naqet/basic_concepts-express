import { faker } from '@faker-js/faker';
import { User } from '@prisma/client';

export const generateUserData = (override: any = {}): User => ({
  id: Number(faker.random.numeric(3)),
  email: faker.internet.email(),
  name: faker.name.fullName(),
  passwordHash: faker.random.alpha(10),
  createdAt: new Date(),
  updatedAt: new Date(),
  ...override,
});

export const generateUsersData = (usersNumber: number): User[] => Array.from({ length: usersNumber }, () => generateUserData());
