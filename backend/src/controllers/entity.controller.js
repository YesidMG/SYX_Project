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
    console.log('BODY RECEIVED IN /entities/report:', req.body)

    // Si viene el query ?notify=true entonces mandamos evento a RabbitMQ
    if (String(req.query.notify).toLowerCase() === 'true') {
      await sendEmailEvent({
        to: process.env.NOTIFY_EMAIL_USER,
        userName: req.body.userName,
        reportName: 'Reporte de Entidades con Conteo de Quejas',
        generatedAt: new Date(),
      })
    }

    await sendEmailEvent({
      to: process.env.REPORT_EMAIL_TO,
      userName,
      reportName,
      generatedAt: new Date(),
    })

    const data = await entityService.getEntitiesWithComplaintCount()
    res.json(data)
  } catch (err) {
    next(err)
  }
}
