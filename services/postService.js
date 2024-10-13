const Post = require("../models/post");

class PostService {
  async getAllPosts() {
    return await Post.findAll();
  }

  async getPostById(id) {
    return await Post.findByPk(id);
  }

  async createPost(data) {
    return await Post.create(data);
  }

  async updatePost(id, data) {
    const post = await Post.findByPk(id);
    if (!post) {
      throw new Error("Post not found");
    }
    return await post.update(data);
  }

  async deletePost(id) {
    const post = await Post.findByPk(id);
    if (!post) {
      throw new Error("Post not found");
    }
    return await post.destroy();
  }
}

module.exports = new PostService();
