import { z } from "zod";

export const createPostSchema = z.object({
	content: z.string(),
	authorId: z.number(),
});

export type CreatePostInput = z.infer<typeof createPostSchema>;
