require('dotenv').config()
const amqp = require('amqplib')

/**
 * Publica un evento de email en RabbitMQ usando un exchange fanout.
 */
async function sendEmailEvent({ to, userName, reportName, generatedAt }) {
  const conn = await amqp.connect(process.env.RABBITMQ_URL + '?heartbeat=30')
  const channel = await conn.createChannel()

  const exchange = 'email_events'

  await channel.assertExchange(exchange, 'fanout', {
    durable: false, // Exchange efímero
  })

  const message = JSON.stringify({
    to,
    userName,
    reportName,
    generatedAt: new Date(generatedAt || Date.now()).toISOString(),
  })

  channel.publish(exchange, '', Buffer.from(message))

  console.log(
    '[',
    new Date().toLocaleString(),
    ']: Evento de notificación EMAIL enviado a RabbitMQ'
  )
  console.log('Mensaje del evento:', message)
  await channel.close()
  await conn.close()
}

module.exports = sendEmailEvent
