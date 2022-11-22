import { Post } from "@prisma/client";
import IPostPayload from "../../types/IPostPayload";
import db from "../../utils/db";

export const getPost = async (id: number): Promise<Post | null> => {
	return await db.post.findFirst({ where: { id } });
};

export const getAllPosts = async (): Promise<Post[]> => {
	return await db.post.findMany();
};

export const createPost = async (payload: IPostPayload): Promise<Post> => {
	return await db.post.create({
		data: { content: payload.content, authorId: payload.authorId },
	});
};

export const deletePost = async (id: number): Promise<Post> => {
	return await db.post.delete({ where: { id } });
};
