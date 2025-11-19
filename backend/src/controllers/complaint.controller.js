const complaintService = require('../services/complaint.service')
const sendComplaintEvent = require('../rabbitmq/sendComplaintEvent')
const sendEmailEvent = require('../rabbitmq/sendEmailEvent')

exports.getAll = async (req, res, next) => {
  try {
    const { userName } = req.query
    await sendEmailEvent({
      to: process.env.REPORT_EMAIL_TO,
      userName: userName,
      reportName: 'Historial de Estados',
      generatedAt: new Date(),
    })
    const { page = 1, limit = 10, entity_id } = req.query
    const paginated = await complaintService.getComplaintsPaginated({
      page: Number(page),
      limit: Number(limit),
      entityId: entity_id,
    })
    const formatted = paginated.complaints.map(c => ({
      id: c.id,
      description: c.description,
      entity_name: c.entity?.name || 'Desconocida',
      logo: c.entity?.logo || '',
      creation_date: c.creation_date,
      state: c.state,
      comments: c.comments || [],
    }))
    res.json({
      total: paginated.total,
      page: Number(page),
      limit: Number(limit),
      complaints: formatted,
    })
  } catch (err) {
    next(err)
  }
}

exports.getById = async (req, res, next) => {
  try {
    const complaint = await complaintService.getComplaintById(Number(req.params.id))
    res.json(complaint)
  } catch (err) {
    next(err)
  }
}

exports.getByEntity = async (req, res, next) => {
  try {
    const complaints = await complaintService.getComplaintsByEntity(Number(req.params.entityId))
    res.json(complaints)
  } catch (err) {
    next(err)
  }
}

exports.create = async (req, res, next) => {
  try {
    const complaint = await complaintService.createComplaint(req.body)
    res.status(201).json(complaint)
  } catch (err) {
    console.error('Error al enviar correo:', err)
    next(err)
  }
}

exports.updateState = async (req, res, next) => {
  try {
    const complaintId = Number(req.params.id)
    const newState = req.body.state

    // Obtener la queja y el estado anterior
    const complaint = await complaintService.getComplaintById(complaintId)
    const prevState = complaint.state

    // Actualizar el estado usando el servicio
    const updatedComplaint = await complaintService.updateComplaintState(complaintId, newState)

    // Enviar el evento a RabbitMQ
    console.log('Actualizando estado de queja (', complaintId, ' ) : ', prevState, ' -> ', newState)
    await sendComplaintEvent({
      complaintId,
      description: complaint.description,
      prevState,
      newState,
    })

    res.json(updatedComplaint)
  } catch (err) {
    console.error('[PATCH /complaints/:id/state] Error:', err)
    next(err)
  }
}
