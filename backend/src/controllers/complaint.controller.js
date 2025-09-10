const complaintService = require('../services/complaint.service');

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
    res.status(201).json(complaint);
  } catch (err) {
    next(err);
  }
};
