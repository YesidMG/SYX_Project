const { PrismaClient } = require('@prisma/client')
const commentRepo = require('../repositories/comments.repo')

class CommentService {
  async getAllComments() {
    return await commentRepo.findAll()
  }

  async getCommentById(id) {
    if (isNaN(id)) {
      throw { status: 400, message: 'ID de comentario inválido' }
    }

    const comment = await commentRepo.findById(id)
    if (!comment) {
      throw { status: 404, message: 'Comentario no encontrado' }
    }

    return comment
  }

  async getCommentsByComplaint(complaintId) {
    if (isNaN(complaintId)) {
      throw { status: 400, message: 'ID de queja inválido' }
    }

    return await commentRepo.findByComplaintId(complaintId)
  }

  async createComment(data) {
    if (!data.content || typeof data.content !== 'string' || data.content.trim() === '') {
      throw { status: 400, message: 'El contenido del comentario es obligatorio y debe ser texto' }
    }

    if (!data.complaint_id || isNaN(data.complaint_id)) {
      throw { status: 400, message: 'El ID de la queja es obligatorio y debe ser un número' }
    }

    return await commentRepo.create({
      content: data.content.trim(),
      complaint_id: Number(data.complaint_id),
    })
  }

  async updateComment(id, data) {
    if (isNaN(id)) {
      throw { status: 400, message: 'ID de comentario inválido' }
    }

    if (!data.content || typeof data.content !== 'string' || data.content.trim() === '') {
      throw { status: 400, message: 'El contenido del comentario es obligatorio y debe ser texto' }
    }

    const existingComment = await commentRepo.findById(id)
    if (!existingComment) {
      throw { status: 404, message: 'Comentario no encontrado' }
    }

    return await commentRepo.update(id, {
      content: data.content.trim(),
    })
  }

  async deleteComment(id) {
    if (isNaN(id)) {
      throw { status: 400, message: 'ID de comentario inválido' }
    }

    const existingComment = await commentRepo.findById(id)
    if (!existingComment) {
      throw { status: 404, message: 'Comentario no encontrado' }
    }

    return await commentRepo.delete(id)
  }
}

module.exports = new CommentService()
