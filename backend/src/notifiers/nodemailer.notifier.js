const nodemailer = require('nodemailer')
const INotifier = require('./notifier.interface')

class NodemailerNotifier extends INotifier {
  constructor() {
    super()
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NOTIFY_EMAIL_USER,
        pass: process.env.NOTIFY_EMAIL_PASS,
      },
    })
  }

  async send({ to, subject, text }) {
    const mailOptions = {
      from: process.env.NOTIFY_EMAIL_USER,
      to,
      subject,
      text,
    }
    await this.transporter.sendMail(mailOptions)
  }
}

module.exports = NodemailerNotifier
