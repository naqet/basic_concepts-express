import {
  generateCommentData,
} from '../../utils/tests/generate';
import prismaMock from '../../__mocks__/prisma';
import {
  getComment, createComment, deleteComment,
} from './index';

describe('Comments repository', () => {
  describe('getComment', () => {
    it('it should return null, if no comment is found', async () => {
      prismaMock.comment.findFirst.mockResolvedValue(null);

      await expect(getComment(1234)).resolves.toEqual(null);
    });

    it('it should return comment', async () => {
      const comment = generateCommentData();
      prismaMock.comment.findFirst.mockResolvedValue(comment);

      await expect(getComment(comment.id)).resolves.toEqual(comment);
    });
  });

  describe('deleteComment', () => {
    it('it should return deleted comment', async () => {
      const comment = generateCommentData();
      prismaMock.comment.delete.mockResolvedValue(comment);

      await expect(deleteComment(comment.id)).resolves.toEqual(comment);
    });
  });

  describe('createComment', () => {
    it('it should return a comment that was added to db', async () => {
      const comment = generateCommentData();
      prismaMock.comment.create.mockResolvedValue(comment);

      await expect(createComment({ content: comment.content, authorId: comment.authorId, postId: comment.postId })).resolves.toEqual(comment);
    });
  });
});
