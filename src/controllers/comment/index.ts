import { Comment } from '@prisma/client';
import {
  createComment,
  deleteComment,
  getComment,
} from '../../repositories/comment';
import ICommentPayload from '../../types/ICommentPayload';

export default class CommentController {
  public static async getComment(id: number): Promise<Comment | null> {
    return getComment(id);
  }

  public static async createComment(body: ICommentPayload): Promise<Comment> {
    return createComment(body);
  }

  public static async deleteComment(id: number): Promise<Comment> {
    return deleteComment(id);
  }
}
