const complaintService = require('../services/complaint.service')
const NodemailerNotifier = require('../notifiers/nodemailer.notifier')
const NotificationService = require('../services/notification.service')

const notifier = new NodemailerNotifier()
const notificationService = new NotificationService(notifier)

// Constantes para IPs locales
const LOCAL_IPV6 = '::1'
const LOCAL_IPV4 = '::ffff:127.0.0.1'

exports.getAll = async (req, res, next) => {
  try {
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

    // Obtener la entidad relacionada
    let entityName = 'Desconocida'
    if (complaint.entity_id) {
      const entity = await require('../services/entity.service').getEntityById(complaint.entity_id)
      if (entity && entity.name) entityName = entity.name
    }

    // Obtener IP
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    if (ip === LOCAL_IPV6 || ip === LOCAL_IPV4) ip = '127.0.0.1'

    // Enviar notificación (correo)
    await notificationService.notifyComplaint({
      to: process.env.NOTIFY_EMAIL_USER,
      entity: entityName,
      description: complaint.description,
      ip,
    })

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
    const updatedComplaint = await complaintService.updateComplaintState(complaintId, newState)
    res.json(updatedComplaint)
  } catch (err) {
    next(err)
  }
}
