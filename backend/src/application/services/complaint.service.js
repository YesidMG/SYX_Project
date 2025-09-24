const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const complaintRepo = require('../repositories/complaint.repo')

const HTTP_STATUS = {
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
}

const ERROR_MESSAGES = {
  INVALID_ID: 'ID inválido',
  INVALID_ENTITY_ID: 'ID de entidad inválido',
  COMPLAINT_NOT_FOUND: 'Queja no encontrada',
  TITLE_REQUIRED: 'El título es obligatorio y debe ser texto',
  DESCRIPTION_REQUIRED: 'La descripción es obligatoria y debe ser texto',
  ENTITY_ID_REQUIRED: 'El ID de la entidad es obligatorio',
}
const FIELD_TYPES = {
  STRING: 'string',
}
const EMPTY_STRING = ''

class ComplaintService {
  async getAllComplaints() {
    return await complaintRepo.findAll()
  }

  async getComplaintById(id) {
    if (isNaN(id)) throw { status: HTTP_STATUS.BAD_REQUEST, message: ERROR_MESSAGES.INVALID_ID }
    const complaint = await complaintRepo.findById(id)
    if (!complaint)
      throw { status: HTTP_STATUS.NOT_FOUND, message: ERROR_MESSAGES.COMPLAINT_NOT_FOUND }
    return complaint
  }

  async getComplaintsByEntity(entityId) {
    if (isNaN(entityId))
      throw { status: HTTP_STATUS.BAD_REQUEST, message: ERROR_MESSAGES.INVALID_ENTITY_ID }
    return await complaintRepo.findByEntityId(entityId)
  }

  async createComplaint(data) {
    if (
      !data.title ||
      typeof data.title !== FIELD_TYPES.STRING ||
      data.title.trim() === EMPTY_STRING
    ) {
      throw { status: HTTP_STATUS.BAD_REQUEST, message: ERROR_MESSAGES.TITLE_REQUIRED }
    }
    if (
      !data.description ||
      typeof data.description !== FIELD_TYPES.STRING ||
      data.description.trim() === EMPTY_STRING
    ) {
      throw { status: HTTP_STATUS.BAD_REQUEST, message: ERROR_MESSAGES.DESCRIPTION_REQUIRED }
    }
    if (!data.entity_id || isNaN(data.entity_id)) {
      throw { status: HTTP_STATUS.BAD_REQUEST, message: ERROR_MESSAGES.ENTITY_ID_REQUIRED }
    }

    return await complaintRepo.create({
      entity_id: Number(data.entity_id),
      title: data.title.trim(),
      description: data.description.trim(),
    })
  }
}

module.exports = new ComplaintService()
