const axios = require('axios')
const AUTH_API = process.env.AUTH_API_URL

exports.login = async (req, res) => {
  console.log('BODY LOGIN:', req.body) // log para revisar el body enviado
  try {
    const response = await axios.post(`${AUTH_API}/login`, req.body)
    res.json(response.data)
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { error: 'Error de autenticación' })
  }
}

exports.status = async (req, res) => {
  try {
    const response = await axios.post(`${AUTH_API}/status`, req.body)
    res.json(response.data)
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { error: 'Error de autenticación' })
  }
}

exports.logout = async (req, res) => {
  try {
    const response = await axios.post(`${AUTH_API}/logout`, req.body)
    res.json(response.data)
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { error: 'Error de autenticación' })
  }
}