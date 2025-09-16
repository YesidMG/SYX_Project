const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');

router.get('/', commentController.getAllComments);
router.get('/:id', commentController.getCommentById);
router.get('/complaint/:complaintId', commentController.getCommentsByComplaint);
router.post('/', commentController.createComment);
router.put('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

// Middleware de manejo de errores
router.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' });
});

module.exports = router;