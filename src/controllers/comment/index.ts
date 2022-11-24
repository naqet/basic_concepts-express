import { Comment } from '@prisma/client';
import {
  createComment,
  deleteComment,
  getComment,
} from '../../repositories/comment';
import ICommentPayload from '../../types/ICommentPayload';

export default class CommentController {
  public async getComment(id: number): Promise<Comment | null> {
    return getComment(id);
  }

  public async createComment(body: ICommentPayload): Promise<Comment> {
    return createComment(body);
  }

  public async deleteComment(id: number): Promise<Comment> {
    return deleteComment(id);
  }
}
