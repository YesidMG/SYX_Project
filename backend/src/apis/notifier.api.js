const axios = require('axios')

class NotifierApi {
  /**
   * @param {string} baseUrl - URL del servicio de notificaciones
   * @param {string} apiKey - Key para autenticar con el servicio
   */
  constructor(baseUrl, apiKey) {
    if (!baseUrl) throw new Error('NotifierApi requires baseUrl')
    this.client = axios.create({
      baseURL: baseUrl,
      timeout: 7000,
      headers: {
        'Content-Type': 'application/json',
        ...(apiKey ? { 'x-api-key': apiKey } : {}),
      },
    })
  }

  async send({ to, subject, text }) {
    try {
      const payload = { to, subject, text }
      const response = await this.client.post('/send', payload)
      return response.data
    } catch (error) {
      if (error.code === 'ECONNREFUSED') {
        console.warn('Notification service is not available')
        return {
          success: false,
          message: 'Notification service is temporarily unavailable',
          error: 'SERVICE_UNAVAILABLE',
        }
      }
      throw {
        success: false,
        message: 'Error sending notification',
        error: error.message || 'UNKNOWN_ERROR',
      }
    }
  }

  async checkHealth() {
    try {
      await this.client.get('/health')
      return true
    } catch {
      return false
    }
  }
}

module.exports = NotifierApi
