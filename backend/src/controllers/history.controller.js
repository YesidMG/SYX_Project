const historyService = require('../services/history.service')
const sendEmailEvent = require('../rabbitmq/sendEmailEvent')

exports.getStateHistory = async (req, res, next) => {
  try {
    //1. leer los datos que envia el frontend
    const userName = req.query.userName
    const reportName = req.query.reportName
    // 2. Disparar evento hacia RabbitMQ
    await sendEmailEvent({
      to: process.env.REPORT_EMAIL_TO,
      userName,
      reportName,
      generatedAt: new Date(),
    })

    const entities = await historyService.getStateHistory()
    res.json(entities)
  } catch (err) {
    next(err)
  }
}

exports.getCompletedComplaintsReport = async (req, res, next) => {
  try {
    const report = await historyService.getCompletedComplaintsReport()
    console.log('Query params:', req.query)
    console.log('Notify param:', req.query.notify)
    console.log(req.body.userName)
    // Si viene el query ?notify=true entonces mandamos evento a RabbitMQ
    if (String(req.query.notify).toLowerCase() === 'true') {
      await sendEmailEvent({
        to: process.env.NOTIFY_EMAIL_USER,
        userName: req.body.userName,
        reportName: 'Reporte de Quejas Completadas',
        generatedAt: new Date(),
      })
    }
    res.json(report)
  } catch (err) {
    next(err)
  }
}
