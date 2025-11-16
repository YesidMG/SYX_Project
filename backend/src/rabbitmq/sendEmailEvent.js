require('dotenv').config()
const amqp = require('amqplib')

async function sendEmailEvent({ to, userName, reportName, generatedAt }) {
  const conn = await amqp.connect(process.env.RABBITMQ_URL + '?heartbeat=30')
  const channel = await conn.createChannel()
  const queue = 'email-queue'

  await channel.assertQueue(queue, { durable: true })

  const message = JSON.stringify({
    to,
    userName,
    reportName,
    generatedAt: new Date(generatedAt || Date.now()).toISOString(),
  })

  channel.sendToQueue(queue, Buffer.from(message), { persistent: true })

  console.log('Evento EMAIL publicado en RabbitMQ:', message)

  await channel.close()
  await conn.close()
}

module.exports = sendEmailEvent
