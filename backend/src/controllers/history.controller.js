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
