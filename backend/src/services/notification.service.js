class NotificationService {
  /**
   * @param {INotifier} notifier
   */
  constructor(notifier) {
    this.notifier = notifier;
  }

  async notifyComplaint({ to, entity, title, description, ip }) {
    const subject = 'Nueva queja recibida';
    const text = `Entidad: ${entity}\nTítulo: ${title}\nDescripción: ${description}\nIP del remitente: ${ip}`;
    await this.notifier.send({ to, subject, text });
  }
}

module.exports = NotificationService;