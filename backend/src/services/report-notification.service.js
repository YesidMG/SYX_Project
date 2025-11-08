const formatLocalDate = require('../utils/localDate.util')
/**
 * Servicio para enviar notificaciones de generación de reportes.
 */
class ReportNotificationService {
  /**
   * @param {NotifierApi} notifier - Instancia que envía notificaciones
   * @param {string} defaultRecipient - Dirección por defecto a la que enviar notificaciones
   */
  constructor(notifier, defaultRecipient) {
    if (!notifier) throw new Error('ReportNotificationService requires a notifier')
    this.notifier = notifier
    this.defaultRecipient = defaultRecipient
  }

  _createNotificationMessage({ userName, reportName, generatedAt }) {
    const formattedDate = formatLocalDate(generatedAt)
    return {
      subject: `SYX Complaints | Notificación de Reporte | ${formattedDate.slice(0, 10)}`,
      text: [
        `Reporte generado por: ${userName}`,
        `Nombre del reporte: ${reportName}`,
        `Fecha de generación: ${formattedDate}`,
      ].join('\n'),
    }
  }

  async sendNotification({ to, userName, reportName, generatedAt } = {}) {
    to ??= this.defaultRecipient
    userName ??= 'unknown'
    reportName ??= 'untitled'
    generatedAt ??= new Date()

    const { subject, text } = this._createNotificationMessage({ userName, reportName, generatedAt })
    const result = await this.notifier.send({ to, subject, text })

    if (!result.success && result.error === 'SERVICE_UNAVAILABLE') {
      console.warn('Notification could not be sent - service unavailable')
      return {
        success: false,
        sent: false,
        message: 'Notification service temporarily unavailable',
      }
    }

    return {
      success: !!result.success,
      sent: result.success,
      message: result.success ? 'Notification sent successfully' : 'Notification failed',
    }
  }
}

module.exports = ReportNotificationService
