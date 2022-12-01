import { faker } from '@faker-js/faker';
import { Comment, Post, User } from '@prisma/client';

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

export const generatePostData = (override: any = {}): Post => ({
  id: Number(faker.random.numeric(3)),
  content: faker.random.words(10),
  authorId: Number(faker.random.numeric(3)),
  createdAt: new Date(),
  updatedAt: new Date(),
  ...override,
});

export const generatePostsData = (postsNumber: number): Post[] => Array.from({ length: postsNumber }, () => generatePostData());

export const generateCommentData = (override: any = {}): Comment => ({
  id: Number(faker.random.numeric(3)),
  content: faker.random.words(10),
  authorId: Number(faker.random.numeric(3)),
  postId: Number(faker.random.numeric(3)),
  createdAt: new Date(),
  updatedAt: new Date(),
  ...override,
});

export const generateCommentsData = (commentsNumber: number): Comment[] => Array.from({ length: commentsNumber }, () => generateCommentData());
