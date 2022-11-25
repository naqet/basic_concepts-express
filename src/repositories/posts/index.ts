import { Post } from '@prisma/client';
import IPostPayload from '../../types/IPostPayload';
import db from '../../utils/db';

export const getPost = async (id: number): Promise<Post | null> => db.post.findFirst({ where: { id } });

export const getAllPosts = async (): Promise<Post[]> => db.post.findMany();

export const createPost = async (payload: IPostPayload): Promise<Post> => db.post.create({
  data: { content: payload.content, authorId: payload.authorId },
});

export const deletePost = async (id: number): Promise<Post> => db.post.delete({ where: { id } });
