const fetch = require('node-fetch')

exports.getStateHistory = async (req, res, next) => {
  try {
    const response = await fetch(process.env.HISTORY_SERVICE_URL + '/events')
    if (!response.ok) throw new Error('Microservicio no disponible')
    const data = await response.json()
    res.json(data)
  } catch (err) {
    next(err)
  }
}