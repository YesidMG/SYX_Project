const commentService = require('../services/comment.service')

class CommentController {
  async getAllComments(req, res, next) {
    try {
      const comments = await commentService.getAllComments()
      res.json(comments)
    } catch (err) {
      next(err)
    }
  }

  async getCommentById(req, res, next) {
    try {
      const { id } = req.params
      const comment = await commentService.getCommentById(id)
      res.json(comment)
    } catch (err) {
      next(err)
    }
  }

  async getCommentsByComplaint(req, res, next) {
    try {
      const { complaintId } = req.params
      const comments = await commentService.getCommentsByComplaint(complaintId)
      res.json(comments)
    } catch (err) {
      next(err)
    }
  }

  async createComment(req, res, next) {
    try {
      const comment = await commentService.createComment(req.body)
      res.status(201).json(comment)
    } catch (err) {
      next(err)
    }
  }

  async updateComment(req, res, next) {
    try {
      const { id } = req.params
      const comment = await commentService.updateComment(id, req.body)
      res.json(comment)
    } catch (err) {
      next(err)
    }
  }

  async deleteComment(req, res, next) {
    try {
      const { id } = req.params
      await commentService.deleteComment(id)
      res.status(204).send()
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new CommentController()
