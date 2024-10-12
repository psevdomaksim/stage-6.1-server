const postService = require("../services/postService");

class PostController {
  async getAllPosts(req, res) {
    try {
      const posts = await postService.getAllPosts();

      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getPostById(req, res) {
    try {
      const post = await postService.getPostById(req.params.id);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createPost(req, res) {
    try {
      const newPost = await postService.createPost(req.body);
      res.status(201).json(newPost);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updatePost(req, res) {
    try {
      const updatedPost = await postService.updatePost(req.params.id, req.body);
      res.json(updatedPost);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deletePost(req, res) {
    try {
      await postService.deletePost(req.params.id);
      res.status(204).json({ message: "Post deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new PostController();
