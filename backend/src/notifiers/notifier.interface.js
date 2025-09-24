class INotifier {
  /**
   * Envía una notificación por correo.
   * @param {Object} params
   * @param {string} params.to - Correo destinatario
   * @param {string} params.subject - Asunto
   * @param {string} params.text - Cuerpo del mensaje
   */
  async send({ to, subject, text }) {
    throw new Error('Método send() no implementado')
  }
}

module.exports = INotifier
