import { Comment } from "@prisma/client";
import ICommentPayload from "../../types/ICommentPayload";
import db from "../../utils/db";

export const getComment = async (id: number): Promise<Comment | null> => {
  return await db.comment.findFirst({ where: { id } });
};

export const createComment = async (
  payload: ICommentPayload
): Promise<Comment> => {
  return await db.comment.create({
    data: {
      content: payload.content,
      postId: payload.postId,
      authorId: payload.authorId,
    },
  });
};

export const deleteComment = async (id: number): Promise<Comment> => {
  return await db.comment.delete({ where: { id } });
};
