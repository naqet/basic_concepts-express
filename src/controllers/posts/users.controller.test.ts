import { generatePostData, generatePostsData } from '../../utils/tests/generate';
import PostsController from '.';
import * as PostsRepository from '../../repositories/posts';

describe('PostsController', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getAllPosts', () => {
    it('should return empty array, if no posts found', async () => {
      const spy = jest
        .spyOn(PostsRepository, 'getAllPosts')
        .mockResolvedValueOnce([]);
      const controller = new PostsController();
      const posts = await controller.getAllPosts();

      expect(posts).toEqual([]);
      expect(spy).toHaveBeenCalledWith();
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should return list of posts', async () => {
      const postsList = generatePostsData(2);
      const spy = jest
        .spyOn(PostsRepository, 'getAllPosts')
        .mockResolvedValueOnce(postsList);

      const controller = new PostsController();
      const posts = await controller.getAllPosts();

      expect(posts).toEqual(postsList);
      expect(spy).toHaveBeenCalledWith();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('getPost', () => {
    it('should return null when no post found', async () => {
      const spy = jest
        .spyOn(PostsRepository, 'getPost')
        .mockResolvedValueOnce(null);
      const controller = new PostsController();
      const post = await controller.getPost(1);

      expect(post).toBeNull();
      expect(spy).toHaveBeenCalledWith(1);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should return post', async () => {
      const postInfo = generatePostData();
      const spy = jest
        .spyOn(PostsRepository, 'getPost')
        .mockResolvedValueOnce(postInfo);
      const controller = new PostsController();
      const post = await controller.getPost(1);

      expect(post).toEqual(postInfo);
      expect(spy).toHaveBeenCalledWith(1);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('createPost', () => {
    it('should return post after adding it to the db', async () => {
      const postData = generatePostData();
      const spy = jest
        .spyOn(PostsRepository, 'createPost')
        .mockResolvedValueOnce(postData);
      const controller = new PostsController();
      const postPayload = { content: postData.content, authorId: postData.authorId };
      const post = await controller.createPost(postPayload);

      expect(post).toEqual(postData);
      expect(spy).toHaveBeenCalledWith(postPayload);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
