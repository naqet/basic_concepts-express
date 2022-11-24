import { Post } from '@prisma/client';
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
} from '../../repositories/post';
import IPostPayload from '../../types/IPostPayload';

export default class PostController {
  public static async getAllPosts(): Promise<Post[]> {
    return getAllPosts();
  }

  public static async getPost(id: number): Promise<Post | null> {
    return getPost(id);
  }

  public static async createPost(body: IPostPayload): Promise<Post | null> {
    return createPost(body);
  }

  public static async deletePost(id: number): Promise<Post> {
    return deletePost(id);
  }
}
