const postService = require("../services/postService");

class PostController {
  async getAllPosts(req, res, next) {
    try {
      const posts = await postService.getAllPosts();
      res.json(posts);
    } catch (error) {
      next(error); 
    }
  }

  async getPostById(req, res, next) {
    try {
      const post = await postService.getPostById(req.params.id);
      if (!post) {
        const error = new Error("Post not found");
        error.statusCode = 404;
        throw error;
      }
      res.json(post);
    } catch (error) {
      next(error);
    }
  }

  async createPost(req, res, next) {
    try {
      const newPost = await postService.createPost(req.body);
      res.status(201).json(newPost);
    } catch (error) {
      error.statusCode = 400; 
      next(error);
    }
  }

  async updatePost(req, res, next) {
    try {
      const updatedPost = await postService.updatePost(req.params.id, req.body);
      res.json(updatedPost);
    } catch (error) {
      error.statusCode = 400; 
      next(error);
    }
  }

  async deletePost(req, res, next) {
    try {
      await postService.deletePost(req.params.id);
      res.status(204).json({ message: "Post deleted" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PostController();
