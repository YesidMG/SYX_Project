const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const complaintRepo = require('../repositories/complaint.repo')

class ComplaintService {
  async getAllComplaints() {
    return await complaintRepo.findAll()
  }

  async getComplaintById(id) {
    if (isNaN(id)) throw { status: 400, message: 'ID inválido' }
    const complaint = await complaintRepo.findById(id)
    if (!complaint) throw { status: 404, message: 'Queja no encontrada' }
    return complaint
  }

  async getComplaintsByEntity(entityId) {
    if (isNaN(entityId)) {
      throw { status: 400, message: 'ID de entidad inválido' }
    }

    return await complaintRepo.findByEntityId(entityId)
  }

  async createComplaint(data) {
    if (
      !data.description ||
      typeof data.description !== 'string' ||
      data.description.trim() === ''
    ) {
      throw { status: 400, message: 'La descripción es obligatoria y debe ser texto' }
    }
    if (!data.entity_id || isNaN(data.entity_id)) {
      throw { status: 400, message: 'El ID de la entidad es obligatorio' }
    }

    return await complaintRepo.create({
      entity_id: Number(data.entity_id),
      description: data.description.trim(),
    })
  }

  async getComplaintsPaginated({ page, limit, entityId }) {
    return await complaintRepo.findPaginated({ page, limit, entityId })
  }

  async updateComplaintState(complaintId, newState) {
    if (isNaN(complaintId)) {
      throw { status: 400, message: 'ID de queja inválido' }
    }

    const validStates = ['OPEN', 'UNDER_REVIEW', 'CLOSED', 'DELETED']
    if (!validStates.includes(newState)) {
      throw { status: 400, message: 'Estado inválido' }
    }

    const existingComplaint = await complaintRepo.findById(complaintId)
    if (!existingComplaint) {
      throw { status: 404, message: 'Queja no encontrada' }
    }

    return await complaintRepo.updateState(complaintId, newState)
  }

}

module.exports = new ComplaintService()
