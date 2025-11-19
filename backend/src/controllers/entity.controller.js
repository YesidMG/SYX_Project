const entityService = require('../services/entity.service')
const sendEmailEvent = require('../rabbitmq/sendEmailEvent')

exports.getAll = async (req, res, next) => {
  try {
    const entities = await entityService.getAllEntities()
    res.json(entities)
  } catch (err) {
    next(err)
  }
}

exports.getById = async (req, res, next) => {
  try {
    const entity = await entityService.getEntityById(Number(req.params.id))
    res.json(entity)
  } catch (err) {
    next(err)
  }
}

exports.create = async (req, res, next) => {
  try {
    const entity = await entityService.createEntity(req.body)
    res.status(201).json(entity)
  } catch (err) {
    next(err)
  }
}

exports.getReport = async (req, res, next) => {
  try {
    const report = await entityService.getEntitiesWithComplaintCount();

    await sendEmailEvent({
      to: process.env.REPORT_EMAIL_TO,
      userName: req.body.userName ,
      reportName: "Reporte de Entidades",
      generatedAt: new Date()
    });

    res.json(report);
  } catch (err) {
    next(err);
  }
};
