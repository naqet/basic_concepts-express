import { z } from 'zod';

export const createCommentSchema = z.object({
  content: z.string(),
  postId: z.number(),
  authorId: z.number(),
});

export type CreateCommentInput = z.infer<typeof createCommentSchema>;
