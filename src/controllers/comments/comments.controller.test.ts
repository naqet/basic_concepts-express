import { generateCommentData, generateCommentsData } from '../../utils/tests/generate';
import CommentsController from '.';
import * as CommentsRepository from '../../repositories/comments';

describe('CommentsController', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getComment', () => {
    it('should return null when no comment found', async () => {
      const spy = jest
        .spyOn(CommentsRepository, 'getComment')
        .mockResolvedValueOnce(null);
      const controller = new CommentsController();
      const comment = await controller.getComment(1);

      expect(comment).toBeNull();
      expect(spy).toHaveBeenCalledWith(1);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should return comment', async () => {
      const commentInfo = generateCommentData();
      const spy = jest
        .spyOn(CommentsRepository, 'getComment')
        .mockResolvedValueOnce(commentInfo);
      const controller = new CommentsController();
      const comment = await controller.getComment(1);

      expect(comment).toEqual(commentInfo);
      expect(spy).toHaveBeenCalledWith(1);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('createComment', () => {
    it('should return comment after adding it to the db', async () => {
      const commentData = generateCommentData();
      const spy = jest
        .spyOn(CommentsRepository, 'createComment')
        .mockResolvedValueOnce(commentData);
      const controller = new CommentsController();
      const commentPayload = { content: commentData.content, authorId: commentData.authorId, postId: commentData.postId };
      const comment = await controller.createComment(commentPayload);

      expect(comment).toEqual(commentData);
      expect(spy).toHaveBeenCalledWith(commentPayload);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('deleteComment', () => {
    it('should return comment after deleting it from the db', async () => {
      const commentData = generateCommentData();
      const spy = jest
        .spyOn(CommentsRepository, 'deleteComment')
        .mockResolvedValueOnce(commentData);
      const controller = new CommentsController();
      const comment = await controller.deleteComment(commentData.id);

      expect(comment).toEqual(commentData);
      expect(spy).toHaveBeenCalledWith(commentData.id);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
