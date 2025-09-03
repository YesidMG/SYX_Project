const complaintService = require('../../application/services/complaint.service');
const NodemailerNotifier = require('../../infrastructure/notifiers/nodemailer.notifier');
const NotificationService = require('../../application/services/notification.service');
const notifier = new NodemailerNotifier();
const notificationService = new NotificationService(notifier);

exports.getAll = async (req, res, next) => {
  try {
    const complaints = await complaintService.getAllComplaints();
    const formatted = complaints.map(c => ({
      id: c.id,
      title: c.title,
      description: c.description,
      entity_name: c.entity.name,
      logo: c.entity.logo,
      creation_date: c.creation_date
    }));
    res.json(formatted);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const complaint = await complaintService.getComplaintById(Number(req.params.id));
    res.json(complaint);
  } catch (err) {
    next(err);
  }
};

exports.getByEntity = async (req, res, next) => {
    try {
        const complaints = await complaintService.getComplaintsByEntity(Number(req.params.entityId));
        res.json(complaints);
    } catch (err) {
        next(err);
    }
}

exports.create = async (req, res, next) => {
  try {
    const complaint = await complaintService.createComplaint(req.body);

    // Obtener nombre de la entidad
    let entityName = 'Desconocida';
    if (complaint.entity_name) entityName = complaint.entity_name;
    if (complaint.entity && complaint.entity.name) entityName = complaint.entity.name;

    // Obtener IP
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    // Enviar notificación (correo)
    await notificationService.notifyComplaint({
      to: process.env.NOTIFY_EMAIL_USER,
      entity: entityName,
      title: complaint.title,
      description: complaint.description,
      ip,
    });

    res.status(201).json(complaint);
  } catch (err) {
    console.error("Error al enviar correo:", err);
    next(err);
  }
};
