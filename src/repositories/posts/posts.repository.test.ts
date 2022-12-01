import {
  generatePostData, generatePostsData,
} from '../../utils/tests/generate';
import { prismaMock } from '../../__mocks__/prisma';
import {
  getAllPosts, getPost, deletePost, createPost,
} from './index';

describe('Posts repository', () => {
  describe('getAllPosts', () => {
    it('it should return empty array, if no posts found', async () => {
      prismaMock.post.findMany.mockResolvedValue([]);

      await expect(getAllPosts()).resolves.toEqual([]);
    });

    it('it should return posts array', async () => {
      const posts = generatePostsData(3);
      prismaMock.post.findMany.mockResolvedValue(posts);

      await expect(getAllPosts()).resolves.toEqual(posts);
    });
  });

  describe('getPost', () => {
    it('it should return null, if no post is found', async () => {
      prismaMock.post.findFirst.mockResolvedValue(null);

      await expect(getPost(1234)).resolves.toEqual(null);
    });

    it('it should return post', async () => {
      const post = generatePostData();
      prismaMock.post.findFirst.mockResolvedValue(post);

      await expect(getPost(post.id)).resolves.toEqual(post);
    });
  });

  describe('deletePost', () => {
    it('it should return deleted post', async () => {
      const post = generatePostData();
      prismaMock.post.delete.mockResolvedValue(post);

      await expect(deletePost(post.id)).resolves.toEqual(post);
    });
  });

  describe('createPost', () => {
    it('it should return a post that was added to db', async () => {
      const post = generatePostData();
      prismaMock.post.create.mockResolvedValue(post);

      await expect(createPost({ content: post.content, authorId: post.authorId })).resolves.toEqual(post);
    });
  });
});
