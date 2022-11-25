import { Post } from '@prisma/client';
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
} from '../../repositories/posts';
import IPostPayload from '../../types/IPostPayload';

export default class PostsController {
  public async getAllPosts(): Promise<Post[]> {
    return getAllPosts();
  }

  public async getPost(id: number): Promise<Post | null> {
    return getPost(id);
  }

  public async createPost(body: IPostPayload): Promise<Post | null> {
    return createPost(body);
  }

  public async deletePost(id: number): Promise<Post> {
    return deletePost(id);
  }
}
