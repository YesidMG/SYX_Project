const complaintService = require('../../application/services/complaint.service');

exports.getAll = async (req, res) => {
  try {
    const complaints = await complaintService.getAllComplaints();
    res.json(complaints);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res) => {
  try {
    const complaint = await complaintService.getComplaintById(Number(req.params.id));
    res.json(complaint);
  } catch (err) {
    next(err);
  }
};

exports.getByEntity = async (req, res) => {
    try {
        const complaints = await complaintService.getComplaintsByEntity(Number(req.params.entityId));
        res.json(complaints);
    } catch (err) {
        next(err);
    }
}

exports.create = async (req, res) => {
  try {
    const complaint = await complaintService.createComplaint(req.body);
    res.status(201).json(complaint);
  } catch (err) {
    next(err);
  }
};
