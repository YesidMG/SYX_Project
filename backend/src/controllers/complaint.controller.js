<<<<<<< HEAD:backend/src/infrastructure/controllers/complaint.controller.js
const complaintService = require('../../application/services/complaint.service');
const NodemailerNotifier = require('../../infrastructure/notifiers/nodemailer.notifier');
const NotificationService = require('../../application/services/notification.service');
=======
const complaintService = require('../services/complaint.service');
const NodemailerNotifier = require('../notifiers/nodemailer.notifier');
const NotificationService = require('../services/notification.service');

>>>>>>> backend-layered-architecture:backend/src/controllers/complaint.controller.js
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

    // Obtener la entidad relacionada
    let entityName = 'Desconocida';
    if (complaint.entity_id) {
<<<<<<< HEAD:backend/src/infrastructure/controllers/complaint.controller.js
      const entity = await require('../../application/services/entity.service').getEntityById(complaint.entity_id);
=======
      const entity = await require('../services/entity.service').getEntityById(complaint.entity_id);
>>>>>>> backend-layered-architecture:backend/src/controllers/complaint.controller.js
      if (entity && entity.name) entityName = entity.name;
    }

    // Obtener IP
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    if (ip === '::1' || ip === '::ffff:127.0.0.1') ip = '127.0.0.1';

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
