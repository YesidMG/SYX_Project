const historyService = require('../services/history.service')

exports.getStateHistory = async (req, res, next) => {
  try {
    const entities = await historyService.getStateHistory()
    res.json(entities)
  } catch (err) {
    next(err)
  }
}