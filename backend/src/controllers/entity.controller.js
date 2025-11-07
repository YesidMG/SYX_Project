const entityService = require('../services/entity.service')

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
    const report = await entityService.getEntitiesWithComplaintCount()
    if (String(req.query.notify).toLocaleLowerCase() === 'true') {
      sendEmailNotification(req)
    }
    res.json(report)
  } catch (err) {
    next(err)
  }
}

const sendEmailNotification = async req => {
  const NotifierApi = require('../apis/notifier.api')
  const ReportNotificationService = require('../services/report-notification.service')

  const notifierBase = process.env.NOTIFIER_API_URL
  const notifierKey = process.env.NOTIFIER_API_KEY
  const defaultRecipient = process.env.NOTIFY_EMAIL_USER

  if (notifierBase && defaultRecipient) {
    const notifier = new NotifierApi(notifierBase, notifierKey)
    const reportNotificationService = new ReportNotificationService(notifier, defaultRecipient)

    const recipient = req.query.to || defaultRecipient
    const userName = req.body.userName
    const reportName = 'Reporte de Entidades con Conteo de Quejas'

    setImmediate(() => {
      reportNotificationService.sendNotification({ recipient, userName, reportName }).catch(err => {
        console.error('Error sending report notification:', err)
      })
    })
  } else {
    console.warn('Notifier API base URL or default recipient email not configured.')
  }
}
